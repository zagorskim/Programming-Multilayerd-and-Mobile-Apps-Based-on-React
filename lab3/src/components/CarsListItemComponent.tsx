import { Car } from "../data/Car";
import "./Styles/CarsListItemComponent.css";
import { useState, Key } from 'react';

export interface CarsListItemProps {
    car: Car;
    deleteCar: (id: Key) => void;
    changePrice: (newPrice: number, id:Key) => void;
}

export const CarsListItemComponent = (props:CarsListItemProps) =>{

    const [inputEnabled, setInputEnabled] = useState(false);

    function enableEditingPrice()
    {
        inputEnabled == true ? setInputEnabled(false) : setInputEnabled(true);
    }

    return (
            <div className="itemContainer">
                    <img src={props.car.image} className="carImage"/>

                <h1 className="carModel"> 
                    {props.car.name}
                </h1>
                <div className="labelContainer">
                    <label>{String(props.car.seats).concat(" seats")}</label>
                    <label>{String(props.car.doors).concat(" doors")}</label>
                    <label>{props.car.AC ? "air conditioning" : "no air conditioning"}</label>
                </div>
                <div className="priceContainer">
                    <label>Price per day:</label>
                    <div className="buttonContainer">
                        <h2 className="currencyLabel">PLN
                        <input style={{border: inputEnabled == true ? "2px solid black" : "2px solid white"}} type="text" onChange={(e) => props.changePrice(Number.parseInt(e.target.value), props.car.id)} disabled={!inputEnabled} className="carPrice" value={props.car.pricePerDay.toString()}></input>
                        </h2>
                        </div>
                    <div className="buttonContainer">
                        <button onClick={(e) => enableEditingPrice()}>{inputEnabled == true ? "Save" : "Edit"}</button>
                        <button onClick={(e) => {props.deleteCar(props.car.id)}}>Delete</button>
                    </div>
                </div>
            </div>
)
} 
