import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <div class="homeSection">
            <h2>Featured Trailers</h2>
            <div class="trailerStrip">
                <button class="arrowButton">&lt</button>
                <iframe class="homeTrailer" src="https://www.youtube.com/embed/jPEYpryMp2s"></iframe>
                <iframe class="homeTrailer" src="https://www.youtube.com/embed/3RDaPV_rJ1Y"></iframe>
                <iframe class="homeTrailer" src="https://www.youtube.com/embed/Q6iK6DjV_iE"></iframe>
                <button class="arrowButton">&gt</button>
            </div>
        </div>
        <div class="homeSection">
            <h2>Now Showing</h2>
            <div class="movieStrip">
                <button class="arrowButton">&lt</button>
                <div class="movieElement">
                    <img class="promoHome" src={require("../images/solo.jpg")}></img>
                    <a>Book Now</a>
                    <a>View Details</a>
                </div>
                <div class="movieElement">
                    <img class="promoHome" src={require("../images/womanKing.jpg")}></img>
                    <a>Book Now</a>
                    <a>View Details</a>
                </div>
                <div class="movieElement">
                    <img class="promoHome" src={require("../images/weathering.jpg")}></img>
                    <a>Book Now</a>
                    <a>View Details</a>
                </div>
                <div class="movieElement">
                    <img class="promoHome" src={require("../images/morbius.jpg")}></img>
                    <a>Book Now</a>
                    <a>View Details</a>
                </div>
                <div class="movieElement">
                    <img class="promoHome" src={require("../images/doctorstrange2.jpg")}></img>
                    <a>Book Now</a>
                    <a>View Details</a>
                </div>
            <button class="arrowButton">&gt</button>
            </div>
        </div>
        <div class="homeSection">
            <h2>Coming Soon</h2>
            <div class="movieStrip">
                <button class="arrowButton">&lt</button>
                <div class="movieElement">
                    <img class="promoHome" src={require("../images/avatar2.jpg")}></img>
                    <a>View Details</a>
                </div>
                <div class="movieElement">
                    <img class="promoHome" src={require("../images/halloween.jpg")}></img>
                    <a>View Details</a>
                </div>
                <div class="movieElement">
                    <img class="promoHome" src={require("../images/knock.jpg")}></img>
                    <a>View Details</a>
                </div>
                <div class="movieElement">
                    <img class="promoHome" src={require("../images/despicable4.jpg")}></img>
                    <a>View Details</a>
                </div>
                <div class="movieElement">
                    <img class="promoHome" src={require("../images/blackadam.jpg")}></img>
                    <a>View Details</a>
                </div>
            <button class="arrowButton">&gt</button>
            </div>
        </div>
    </div>
  )
}