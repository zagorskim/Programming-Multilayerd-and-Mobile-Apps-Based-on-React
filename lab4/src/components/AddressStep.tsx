import "./styles/AddressStep.css";
import {AddressInput} from "./AddressInput";
import React, {useState} from "react";
import {Formik} from "formik";
// TODO: add checkbox logic to disable invoice input address fields when it should be the same as the delivery address
export interface AddressStepProps{
    movetoNextStep: (back: boolean) => void;
    saveFormData: (deliveryStreet: string, deliveryZipcode: string, deliveryCity: string,
                   invoiceStreet: string, invoiceZipcode: string, invoiceCity: string) => void;
}

export const AddressStep:React.FC<AddressStepProps> = (props: AddressStepProps) => {

    const [deliveryStreet, setDeliveryStreet] = useState("");
    const [deliveryZipcode, setDeliveryZipcode] = useState("");
    const [deliveryCity, setDeliveryCity] = useState("");
    const [invoiceStreet, setInvoiceStreet] = useState("");
    const [invoiceZipcode, setInvoiceZipcode] = useState("");
    const [invoiceCity, setInvoiceCity] = useState("");

    const [errors, setErrors] = useState([false, false, false, false, false, false])

    const [toggle, setToggle] = useState(false);

    const  validateAddressData = () => {
        let validationStatus: boolean = true;
        let tempErrors = [...errors];
        const zipcodePattern: RegExp = new RegExp("^[0-9]{2}-[0-9]{3}$");
        console.log(deliveryZipcode);
        if(deliveryStreet.length < 3)
        {
            tempErrors[0] = true;
            validationStatus = false;
        }
        else
            tempErrors[0] = false;
            if(!zipcodePattern.test(deliveryZipcode))
        {
            tempErrors[1] = true;
            validationStatus = false;
        }
        else
            tempErrors[1] = false;
        if(deliveryCity.length < 3)
        {
            tempErrors[2] = false;
            validationStatus = false;
        }
        else
            tempErrors[2] = false;
        if(invoiceStreet.length < 3)
        {

            tempErrors[3] = true;
            validationStatus = false;
        }
        else
            tempErrors[3] = false;
        if(!zipcodePattern.test(invoiceZipcode))
        {
            tempErrors[4] = true;
            validationStatus = false;
        }
        else
            tempErrors[4] = false;
        if(invoiceCity.length < 3)
        {
            tempErrors[5] = true;
            validationStatus = false;
        }
        else {
            tempErrors[5] = false;
        }
        setErrors(tempErrors);
        console.log(tempErrors);
        console.log(errors)
        if(validationStatus) {
            sendData();
            props.movetoNextStep(false);
        }
    }

    const sendData = () => {
        props.saveFormData(deliveryStreet, deliveryZipcode, deliveryCity, invoiceStreet, invoiceZipcode, invoiceCity);
    }

    function onToggleChange() {
        //TODO: implement function
    }

    return (
        <div>
            <AddressInput setStreet={setDeliveryStreet} setZipcode={setDeliveryZipcode} setCity={setDeliveryCity}
                streetError={errors[0]} zipcodeError={errors[1]} cityError={errors[2]}/>
            <AddressInput setStreet={setInvoiceStreet} setZipcode={setInvoiceZipcode} setCity={setInvoiceCity}
                streetError={errors[3]} zipcodeError={errors[4]} cityError={errors[5]}/>
            <button onClick={() => props.movetoNextStep(true)}>Back</button>
            <button onClick={() => validateAddressData()}>Next</button>
            <input type={"checkbox"} checked={toggle} onChange={() => onToggleChange()}></input>
        </div>
    ) 
}