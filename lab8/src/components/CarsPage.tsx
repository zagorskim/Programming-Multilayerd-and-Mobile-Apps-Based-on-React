import React from 'react';
import { Car } from '../data/Car';
import {useState} from 'react';
import CARS from '../data/cars.json'
import {
    useParams,
    useNavigate,
    useLocation,
    Outlet,
  } from "react-router-dom";

export const CarsPage: React.FC = () => {

    const [carsList, setCarsList] = useState<Car[]>(CARS);
    const navigate = useNavigate();
    return (
        <div>
            <strong>Cars</strong>
            <p/>
            {carsList.map(car => <div>{car.name}</div>)}
            <button 
            onClick={(e) => {
                navigate('new');
            }}>New</button>
            <Outlet/>
        </div>
    )
}