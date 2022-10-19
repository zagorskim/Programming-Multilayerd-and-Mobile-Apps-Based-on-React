import {useState, Key} from 'react';
import {Car, CARS} from "../data/Car";
import { CarsListItemComponent } from './CarsListItemComponent';
import SearchBar from './SearchBar';

export const CarsListComponent =() => {
    const [carsList, setCarsList] = useState<Car[]>(CARS);
    const [query, setQuery] = useState('');

    function deleteCar(id: Key): void{
        setCarsList(carsList.slice(0, carsList.findIndex((car) => car.id == id))
            .concat(carsList.slice(carsList.findIndex((car) => car.id == id) + 1)));
        // setCarsList(carsList.filter(car => car.id != id));
    }

    return ( 
        <>
            <SearchBar setQuery = {setQuery} />
            <div style={{margin: 20}}>
                {
                carsList
                .filter(carObject => carObject.name.toLowerCase().includes(query.toLowerCase()))
                .map(carObject => <CarsListItemComponent car={carObject} deleteCar={deleteCar}/>)
            }
            </div>
        </>
    ) 
}