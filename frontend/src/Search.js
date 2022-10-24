import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export default function Browse() {
  return (
    <div>
    <div class="search">
        <div class="searchLine">
            <input class="searchBar" type="search" placeholder="Enter a Movie Title"></input>
            <button class="searchButton">Search</button>
        </div>
    </div>
    <div class="movieList">
        <div class="movieResult">
            <img class="promoPoster" src="./images/solo.jpg"></img>
            <div class="resultInfo">
                <h2>Solo</h2>
                <p>Rated: PG-13</p>
                <a>View Movie Details</a>
                <a>Book Tickets</a> 
            </div>
        </div>
        <div class="movieResult">
            <img class="promoPoster" src="./images/womanKing.jpg"></img>
            <div class="resultInfo">
                <h2>The Woman King</h2>
                <p>Rated: PG-13</p>
                <a>View Movie Details</a>
                <a>Book Tickets</a> 
            </div>
        </div>
        <div class="movieResult">
            <img class="promoPoster" src="./images/weathering.jpg"></img>
            <div class="resultInfo">
                <h2>Weathering With You</h2>
                <p>Rated: PG-13</p>
                <a>View Movie Details</a>
                <a>Book Tickets</a> 
            </div>
        </div>
    </div>
    </div>
  )
}