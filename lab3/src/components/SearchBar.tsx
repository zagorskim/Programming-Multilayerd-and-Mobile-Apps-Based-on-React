import { useState } from "react";

interface SearchBarProps{
    setQuery(searchValue: string) :void
}

const SearchBar = (props:any, setCarsList:any) => {
    const filterCars = () => {
        props.setQuery(inputText);
    }

    const[inputText, setInputText] = useState("");

    return(
        <div>
            <input onChange={ e => setInputText(e.target.value)}/>
            <button onClick={filterCars}>Search</button>
        </div>
    )
} 

export default SearchBar;