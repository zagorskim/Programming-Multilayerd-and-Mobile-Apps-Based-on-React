import { useState } from "react";
import "./Styles/SearchBar.css";

interface SearchBarProps{
    setQuery(searchValue: string) :void
}
 
const SearchBar = (props:any, setCarsList:any) => {
    const filterCars = () => {
        props.setQuery(inputText);
    }

    const[inputText, setInputText] = useState("");

    return(
        <div className="searchBarContainer">
            <input className="textInput" onChange={ e => setInputText(e.target.value)}/>
            <button className= "searchButton" onClick={filterCars}>Search</button>
        </div>
    )
} 

export default SearchBar;