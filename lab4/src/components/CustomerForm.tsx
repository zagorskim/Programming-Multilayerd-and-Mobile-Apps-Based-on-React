import {useState} from 'react';
import { NameStep, NameStepProps } from './NameStep';
import "./styles/CustomerForm.css";
import { AddressStep } from './AddressStep';
import { SummaryStep } from './SummaryStep';
import { UserData } from '../misc/UserDataInterface';

export const CustomerForm =() => {
    const [currentStep, setCurrentStep] = useState(0);

    const [userData, setUserData] = useState<UserData>()

    const moveNextStep = () : void => {
        setCurrentStep(prev => prev + 1);
    }

    const SetDataFromNextStep = (name: string, surname: string, email: string) =>{
        let temp = userData || {};
        temp.name = name;
        temp.surname = surname;
        temp.email = email;
        setUserData(temp);
    }

    return ( 
        <main>
            <h1>Form</h1>
            {
                currentStep == 0 && <NameStep movetoNextStep = {moveNextStep} saveFormData={SetDataFromNextStep}></NameStep>
            }
            {
                currentStep == 2 && <AddressStep></AddressStep>
            }
            {
                currentStep == 1 && <SummaryStep userData={userData!}></SummaryStep>
            }
        </main>
    ) 
}