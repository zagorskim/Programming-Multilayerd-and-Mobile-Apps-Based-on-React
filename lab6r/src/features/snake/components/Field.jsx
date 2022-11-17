import { useState } from "react";
import "./styles/Field.css";

export const Field = (props) => {

  return (
      <div style={props.content == 0 ? {background:'black'} : props.content == 1 ? {background:'green'} : {background:'red'}} class="mainDiv">
        
      </div>
  );
};