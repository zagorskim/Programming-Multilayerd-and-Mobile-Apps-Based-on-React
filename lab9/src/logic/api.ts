import { Employee } from "../model/Employee";
import { Key } from "react";
import { response } from "msw";
import { MainComponent } from "../../../lab5/src/components/MainComponent";
import { json } from "stream/consumers";

const BASE_URL = "http://localhost:3001";

export const getEmployees: () => Promise<Employee[]> = async () => {
  return fetch(BASE_URL + "/employees").then((res) => {
    if (res.ok) return res.json();
    else throw res;
  });
};

export const addEmployee = async (
  employee: Employee,
  updateList: () => void,
  setSavingState: (value: boolean) => void
) => {
  await fetch(BASE_URL + "/employees", {
    method: "POST",
    body: JSON.stringify({ id: employee.id, name: employee.name, isActive: employee.isActive }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.ok) updateList();
      else throw res;
    })
    .then(() => setSavingState(false));
};

export const deleteEmployee = async (
  employeeId: Key,
  updateList: () => void,
  setDeletedId: (value: string) => void
) => {
  setDeletedId(employeeId.toString());
  await fetch(BASE_URL + "/employees/" + employeeId, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) updateList();
    else throw res;
  });
};
