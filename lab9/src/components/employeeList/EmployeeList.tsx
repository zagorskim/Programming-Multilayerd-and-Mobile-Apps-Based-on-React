import React, {useEffect, useState} from 'react';
import {getEmployees, addEmployee, deleteEmployee} from "../../logic/api";
import EmployeeListItem from "./EmployeeListItem";
import { Employee } from '../../model/Employee';
import Loader from "../utils/Loader";
import AddEmployeeFormContainer from './addEmployeeForm/AddEmployeeFormContainer';
import AddEmployeeForm from './addEmployeeForm/AddEmployeeForm';

const EmployeeList: React.FC = () => {

    const [employees, setEmployees] = useState<Employee[]>();
    const [loadingState, setLoadingState] = useState<boolean>(true);
    const [reload, setReload] = useState<boolean>(false);
    const [deletedId, setDeletedId] = useState<string>('')

    useEffect(() => {
        setLoadingState(true);
        Promise.resolve(getEmployees()).then((res) => {if(!res)console.log('Error: Empty response');setEmployees(res);}).then(() => {setLoadingState(false);}).catch((err) => {console.log(err)});
    }, [reload])  

    const updateList = () => {
        setReload(!reload);
    }

    const loaderChild = employees?.map((x) => { if(x.name) return (
        <>
        {deletedId != x.id.toString() && 
        <p>
            <EmployeeListItem employee={x} updateList={updateList}/>
            <button onClick={() => {deleteEmployee(x.id, updateList, setDeletedId);}}>
                Delete
            </button>
        </p>}
        {deletedId == x.id.toString() && <p>Deleting...</p>}
        </>
        )})

        

    return (
        <>
        {!loadingState && <h1>Employee list</h1>}
            <Loader loading = {loadingState} label='Loading...'>
                {loaderChild}
                <AddEmployeeFormContainer updateList={updateList}/>
            </Loader>
        </>
    );
} 

export default EmployeeList;
