import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';

export default function IndividualSeat(props) {
    
    const showing = JSON.parse(window.sessionStorage.getItem("currentShowing"))
    if (showing.seats[props.index] === "available") {
        return (
            <label class="seatContainer">
                <input type="checkbox" id={props.index} value={props.active}></input>
            </label>
        )
    } else {

    }

}