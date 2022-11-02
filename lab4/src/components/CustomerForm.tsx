import { useState } from "react";
import { NameStep, NameStepProps } from "./NameStep";
import "./styles/CustomerForm.css";
import { AddressStep } from "./AddressStep";
import { SummaryStep } from "./SummaryStep";
import { UserData } from "../misc/UserDataInterface";
// TODO: fill input fields with already gathered data when going back from further steps
export const CustomerForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  let temp: UserData = {
    name: "",
    surname: "",
    email: "",
    deliverycity: "",
    deliverystreet: "",
    deliveryzipcode: "",
    invoicecity: "",
    invoicestreet: "",
    invoicezipcode: "",
  };
  const [userData, setUserData] = useState<UserData>(temp);

  const [toggle, setToggle] = useState<boolean>(false);

  const moveNextStep = (back: boolean = false, count: number = 1): void => {
    if (back) setCurrentStep((prev) => prev - count);
    else setCurrentStep((prev) => prev + count);
  };

  const SetDataFromNextStep = (
    name: string,
    surname: string,
    email: string
  ) => {
    let temp = userData || {};
    temp.name = name;
    temp.surname = surname;
    temp.email = email;
    setUserData(temp);
  };

  const SetDataFromAddressStep = (
    deliveryStreet: string,
    deliveryZipcode: string,
    deliveryCity: string,
    invoiceStreet: string,
    invoiceZipcode: string,
    invoiceCity: string
  ) => {
    let temp = userData || {};
    temp.deliverystreet = deliveryStreet;
    temp.deliveryzipcode = deliveryZipcode;
    temp.deliverycity = deliveryCity;
    temp.invoicestreet = invoiceStreet;
    temp.invoicezipcode = invoiceZipcode;
    temp.invoicecity = invoiceCity;
    setUserData(temp);
  };

  return (
    <main>
      <h1>Form</h1>
      {currentStep == 0 && (
        <NameStep
          data={userData}
          movetoNextStep={moveNextStep}
          saveFormData={SetDataFromNextStep}
        ></NameStep>
      )}
      {currentStep == 1 && (
        <AddressStep
          data={userData}
          movetoNextStep={moveNextStep}
          saveFormData={SetDataFromAddressStep}
          toggle={toggle}
          setToggle={setToggle}
        ></AddressStep>
      )}
      {currentStep == 2 && (
        <SummaryStep
          movetoNextStep={moveNextStep}
          userData={userData!}
        ></SummaryStep>
      )}
    </main>
  );
};
