import {TextField} from "@mui/material";
import React, { useState } from "react";

export interface AddressInputProps{
    setStreet: (street: string) => void;
    setZipcode: (zipcode: string) => void;
    setCity: (city: string) => void;
    streetError: boolean;
    zipcodeError: boolean;
    cityError: boolean;
}

export const AddressInput: React.FC<AddressInputProps> =(props: AddressInputProps) => {

    return ( 
        <div>
                <TextField error={props.streetError} label="Street" helperText={props.streetError ? "Entry too short" : ""} required onChange={(e) => props.setStreet(e.target.value)} type="text" ></TextField>
                <TextField error={props.zipcodeError} label="Zip Code (DDD-DD)" helperText={props.zipcodeError ? "Wrong zipcode format" : ""} onChange={(e) => props.setZipcode(e.target.value)} type="zipcode"></TextField>
                <TextField error={props.cityError} label="City" helperText={props.cityError ? "Entry too short" : ""} required onChange={(e) => props.setCity(e.target.value)} type="text"></TextField>
        </div>
    ) 
}