import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

export const NewCarPage: React.FC = () => {

    const [carName, setCarName] = useState('');
    const navigate = useNavigate();
    
    return (
        <div>
            <hr/>
            <strong>Add new car</strong>
            <p/>
            <input type='text'/>
            <button 
            onClick={(e) =>{
                navigate('/cars');
            }}>Add car</button>
        </div>
    )
}