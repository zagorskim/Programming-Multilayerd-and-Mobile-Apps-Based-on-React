import "./styles/AddressStep.css";
import { AddressInput } from "./AddressInput";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { UserData } from "../misc/UserDataInterface";
import { width } from "@mui/system";
import { TextField } from '@mui/material';
// TODO: add checkbox logic to disable invoice input address fields when it should be the same as the delivery address
export interface AddressStepProps {
  data: UserData;
  movetoNextStep: (back: boolean) => void;
  saveFormData: (
    deliveryStreet: string,
    deliveryZipcode: string,
    deliveryCity: string,
    invoiceStreet: string,
    invoiceZipcode: string,
    invoiceCity: string
  ) => void;
  toggle: boolean;
  setToggle: (b: boolean) => void;
}

export const AddressStep: React.FC<AddressStepProps> = (
  props: AddressStepProps
) => {
  const [deliveryStreet, setDeliveryStreet] = useState(
    props.data.deliverystreet
  );
  const [deliveryZipcode, setDeliveryZipcode] = useState(
    props.data.deliveryzipcode
  );
  const [deliveryCity, setDeliveryCity] = useState(props.data.deliverycity);
  const [invoiceStreet, setInvoiceStreet] = useState(props.data.invoicestreet);
  const [invoiceZipcode, setInvoiceZipcode] = useState(
    props.data.invoicezipcode
  );
  const [invoiceCity, setInvoiceCity] = useState(props.data.invoicecity);

  const [errors, setErrors] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const validateAddressData = (next: boolean = true) => {
    let validationStatus: boolean = true;
    let tempErrors = [...errors];
    const zipcodePattern: RegExp = new RegExp("^[0-9]{2}-[0-9]{3}$");
    if (deliveryStreet.length < 3) {
      tempErrors[0] = true;
      validationStatus = false;
    } else tempErrors[0] = false;
    if (!zipcodePattern.test(deliveryZipcode)) {
      tempErrors[1] = true;
      validationStatus = false;
    } else tempErrors[1] = false;
    if (deliveryCity.length < 3) {
      tempErrors[2] = true;
      validationStatus = false;
    } else tempErrors[2] = false;
    if (invoiceStreet.length < 3) {
      tempErrors[3] = true;
      validationStatus = false;
    } else tempErrors[3] = false;
    if (!zipcodePattern.test(invoiceZipcode)) {
      tempErrors[4] = true;
      validationStatus = false;
    } else tempErrors[4] = false;
    if (invoiceCity.length < 3) {
      tempErrors[5] = true;
      validationStatus = false;
    } else {
      tempErrors[5] = false;
    }
    setErrors(tempErrors);
    if (validationStatus) {
      sendData();
      props.movetoNextStep(false);
    }
  };

  const sendData = () => {
    props.saveFormData(
      deliveryStreet,
      deliveryZipcode,
      deliveryCity,
      invoiceStreet,
      invoiceZipcode,
      invoiceCity
    );
  };

  function onToggleChange() {
    //TODO: fix changing strings in disabled textboxes and keep them disabled when coming back form other screens
    if (props.toggle == false) {
      setInvoiceCity(deliveryCity);
      setInvoiceStreet(deliveryStreet);
      setInvoiceZipcode(deliveryZipcode);
      props.setToggle(true);
    } else {
      props.setToggle(false);
    }
  }

  return (
    <div>
      <h2>Delivery Address</h2>
      <AddressInput
        isDisabled={false}
        storage={[
          deliveryStreet,
          deliveryZipcode,
          deliveryCity,
        ]}
        setStreet={setDeliveryStreet}
        setZipcode={setDeliveryZipcode}
        setCity={setDeliveryCity}
        streetError={errors[0]}
        zipcodeError={errors[1]}
        cityError={errors[2]}
      />
      <h2>Invoice Address</h2>
      <AddressInput
        isDisabled={props.toggle}
        storage={props.toggle ? [
          deliveryStreet,
          deliveryZipcode,
          deliveryCity,] : [
          invoiceStreet,
          invoiceZipcode,
          invoiceCity,
        ]}
        setStreet={setInvoiceStreet}
        setZipcode={setInvoiceZipcode}
        setCity={setInvoiceCity}
        streetError={props.toggle ? errors[0] : errors[3]}
        zipcodeError={props.toggle ? errors[1] : errors[4]}
        cityError={props.toggle ? errors[2] : errors[5]}
      />
      <div style={{height: 20, width:40}}/>
      <button style={{margin: 20}} onClick={() => props.movetoNextStep(true)}>Back</button>
      <button style={{margin: 20}} onClick={() => validateAddressData()}>Next</button>
      <input
        type={"checkbox"}
        checked={props.toggle}
        onChange={() => onToggleChange()}
      ></input>
      <label>Invoice address the same as delivery address</label>
    </div>
  );
};
