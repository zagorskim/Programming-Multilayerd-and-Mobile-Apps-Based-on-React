import {useState} from 'react';
import {Car, CARS} from "../data/Car";
import { CarsListItemComponent } from './CarsListItemComponent';
import SearchBar from './SearchBar';

export const CarsListComponent =() => {
    const [carsList, setCarsList] = useState<Car[]>(CARS);
    const [query, setQuery] = useState('');
    return (
        <>
            <SearchBar setQuery = {setQuery} />
            <div>
                {
                carsList
                .filter(carObject => carObject.name.toLowerCase().includes(query.toLowerCase()))
                .map(carObject => <CarsListItemComponent car={carObject}/>)
            }
            </div>
        </>
    )
}