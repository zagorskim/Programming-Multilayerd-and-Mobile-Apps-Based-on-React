import React, {useState} from 'react';
import AddEmployeeForm from "./AddEmployeeForm";
import { Employee } from '../../../model/Employee';
import {addEmployee} from "../../../logic/api";
import Loader from "../../utils/Loader";
import { AddEmployeeFormProps } from './AddEmployeeForm';

export interface AddEmployeeProps {
    updateList: () => void;
}

const AddEmployeeFormContainer: React.FC<AddEmployeeProps> = (props: AddEmployeeProps) => {
    
    const [hidden, setHidden] = useState(false);
    const [savingState, setSavingState] = useState<boolean>(false);

    const saveEmployee = (employee: Employee) => {
        setSavingState(true);
        addEmployee(employee, props.updateList, setSavingState);
    }
    return (
        <>
            {savingState && 'Saving...'}
            {!hidden && !savingState && <AddEmployeeForm saveEmployee={saveEmployee} hideForm={() => setHidden(true)}/>}
            {hidden && <button onClick={() => setHidden(false)}>Expand</button>}

        </>
    )
}

export default AddEmployeeFormContainer;
