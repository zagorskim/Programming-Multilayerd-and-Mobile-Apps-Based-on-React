import { useState } from "react";
import "./styles/Field.css";

export const Field = (props) => {

  return (
      <div className="div" style={props.content == 0 ? {background:'black'} : props.content == 1 ? {background:'green'} : props.content == 2 ? {background:'red'} : {background:'blue'}} >
        
      </div>
  );
};