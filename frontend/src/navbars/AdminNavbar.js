import React from 'react';
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter, NavLink } from "react-router-dom";

export default function CustomerNavbar() {
    return (
    <header>
        <img class="logo" src={require("../images/logo.png")} alt="logo"></img>
        <NavLink class="siteName" to="./home">C7 Cinemas</NavLink>
        <div class="searchLineHome">
           <input class="searchBar" type="search" placeholder="Enter a Movie Title"></input>
            <button class="searchButton">Search</button>
        </div>
        <nav>
            <ul class="nav_links">
                <li><NavLink to="./admin/home">Home</NavLink></li>
            </ul>
        </nav>
      </header>
    )
}