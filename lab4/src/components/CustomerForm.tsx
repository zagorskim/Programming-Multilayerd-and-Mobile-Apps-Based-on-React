import {useState} from 'react';
import { NameStep, NameStepProps } from './NameStep';
import "./styles/CustomerForm.css";
import { AddressStep } from './AddressStep';
import { SummaryStep } from './SummaryStep';
import { UserData } from '../misc/UserDataInterface';

export const CustomerForm =() => {
    const [currentStep, setCurrentStep] = useState(0);

    const [userData, setUserData] = useState<UserData>()

    const moveNextStep = (back: boolean = false, count: number = 1) : void => {
        if(back)
            setCurrentStep(prev => prev - count);
        else
            setCurrentStep(prev => prev + count);
    }

    const SetDataFromNextStep = (name: string, surname: string, email: string) => {
        let temp = userData || {};
        temp.name = name;
        temp.surname = surname;
        temp.email = email;
        setUserData(temp);
    }

    const SetDataFromAddressStep = (deliveryStreet: string, deliveryZipcode: string, deliveryCity: string,
                                    invoiceStreet: string, invoiceZipcode: string, invoiceCity: string) =>{
        let temp = userData || {};
        temp.deliverystreet = deliveryStreet;
        temp.deliveryzipcode = deliveryZipcode;
        temp.deliverycity = deliveryCity;
        temp.invoicestreet = invoiceStreet;
        temp.invoicezipcode = invoiceZipcode;
        temp.invoicecity = invoiceCity;
        setUserData(temp);
    }

    return ( 
        <main>
            <h1>Form</h1>
            {
                currentStep == 0 && <NameStep movetoNextStep = {moveNextStep} saveFormData={SetDataFromNextStep}></NameStep>
            }
            {
                currentStep == 1 && <AddressStep movetoNextStep= {moveNextStep} saveFormData={SetDataFromAddressStep}></AddressStep>
            }
            {
                currentStep == 2 && <SummaryStep movetoNextStep={moveNextStep} userData={userData!}></SummaryStep>
            }
        </main>
    ) 
}