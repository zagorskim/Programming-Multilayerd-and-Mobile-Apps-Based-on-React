import { Car } from "../data/Car";
import "./Styles/CarsListItemComponent.css";

export interface CarsListItemProps {
    car: Car
}

export const CarsListItemComponent = (props:CarsListItemProps) =>{
    return (
            <div className="itemContainer">
                    <img src={props.car.image} className="carImage">

                    </img>
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
                    <h1 className="carPrice">PLNasdfasdfasdfasdfasdf</h1>
                    <div className="buttonContainer">
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
)
} 