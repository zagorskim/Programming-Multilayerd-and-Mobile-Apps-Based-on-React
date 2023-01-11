import { TextField } from "@mui/material";
import React, { useState } from "react";
import { parentPort } from "worker_threads";
import { UserData } from "../misc/UserDataInterface";
export interface AddressInputProps {
  storage: string[];
  isDisabled: boolean;
  setStreet: (street: string) => void;
  setZipcode: (zipcode: string) => void;
  setCity: (city: string) => void;
  streetError: boolean;
  zipcodeError: boolean;
  cityError: boolean;
}

export const AddressInput: React.FC<AddressInputProps> = (
  props: AddressInputProps
) => {
  let tempdata = [...props.storage];
  return (
    <div>
      <TextField
        style={{ margin: 20 }}
        disabled={props.isDisabled}
        error={props.streetError}
        label="Street"
        helperText={props.streetError ? "Entry too short" : ""}
        required
        onChange={(e) => props.setStreet(e.target.value)}
        type="text"
        value={props.storage[0]}
        defaultValue={props.storage[0]}
      ></TextField>
      <TextField
        style={{ margin: 20 }}
        disabled={props.isDisabled}
        error={props.zipcodeError}
        label="Zip Code (DDD-DD)"
        helperText={props.zipcodeError ? "Wrong zipcode format" : ""}
        onChange={(e) => props.setZipcode(e.target.value)}
        type="zipcode"
        value={props.storage[1]}
        defaultValue={props.storage[1]}
      ></TextField>
      <TextField
        style={{ margin: 20 }}
        disabled={props.isDisabled}
        error={props.cityError}
        label="City"
        helperText={props.cityError ? "Entry too short" : ""}
        required
        onChange={(e) => props.setCity(e.target.value)}
        value={props.storage[2]}
        defaultValue={props.storage[2]}
        type="text"
      ></TextField>
    </div>
  );
};
