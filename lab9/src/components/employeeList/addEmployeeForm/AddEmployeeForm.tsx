import React, {useState} from 'react';
import {generateKey} from "../../../utils/generateKey";
import { Employee } from '../../../model/Employee';

export interface AddEmployeeFormProps {
    saveEmployee: (employee: Employee) => void;
    hideForm: () => void;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = (props: AddEmployeeFormProps) => {
    
    const [insertedEmployee, setInsertedEmployee] = useState<Employee>();

    return (
        <>
            <form>
                <h3>Add Employee</h3>
                <input type='text' onChange={(e) => setInsertedEmployee({name: e.target.value, id: generateKey(), isActive: true})}/>
                <button onClick={() => props.hideForm()}>Cancel</button>
                <button onClick={() => {if(insertedEmployee) props.saveEmployee(insertedEmployee)}}>Save</button>
            </form>
        </>
    )
}

export default AddEmployeeForm;
