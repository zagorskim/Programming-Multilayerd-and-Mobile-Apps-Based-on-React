import { Car } from "../data/Car";
import "./Styles/CarsListItemComponent.css";
import { useState, Key } from 'react';

export interface CarsListItemProps {
    car: Car;
    deleteCar: (id: Key) => void;
}

export const CarsListItemComponent = (props:CarsListItemProps) =>{
    return (
            <div className="itemContainer">
                    <img src={props.car.image} className="carImage"/>

                <h1 className="carModel"> 
                    {props.car.name}
                </h1>
                <div className="labelContainer">
                    <label>sdfasdf</label>
                    <label>sdfasdf</label>
                    <label>sdfasdf</label>
                </div>
                <div className="priceContainer">
                    <label>Price per day:</label>
                    <h1 className="carPrice">PLN {props.car.pricePerDay}</h1>
                    <div className="buttonContainer">
                        <button>Edit</button>
                        <button onClick={(e) => {props.deleteCar(props.car.id)}}>Delete</button>
                    </div>
                </div>
            </div>
)
} 