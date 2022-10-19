import { Car } from "../data/Car"

export interface CarsListItemProps {
    car: Car
}

export const CarsListItemComponent = (props:CarsListItemProps) =>{
    return (
            <div>
                <h1>
                    {props.car.name}
                </h1>
            </div>
)
}