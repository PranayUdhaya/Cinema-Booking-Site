import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

export default function Browse() {
  return (
    <div>
    <div class="movieDetails">
        <h1 class="detailsTitle">Solo: A Star Wars Story</h1>
        <div class="detailsTop">
            <img class="detailsPoster" src="../images/solo.jpg"></img>
            <iframe class="detailsTrailer" src="https://www.youtube.com/embed/jPEYpryMp2s"></iframe>
        </div>
        <div class="detailsBottom">
            <div class="infoStrip">
                <h3 class="detailHeading">Category: Sci-Fi</h3>

                <h3 class="detailHeading">Rated: PG-13</h3>
                <h3 class="detailHeading">Director: Ron Howard</h3>
                <h3 class="detailHeading">Producer: Kathleen Kennedy</h3>
                <h3 class="detailHeading">Cast: Alden Ehrenreich, Woody Harrelson, Emilia Clarke</h3>
                <h3 class="detailHeading">Reviews: 6.9/10</h3>
            </div>
            <h3 class="detailHeading">Synopsis: </h3>
            <p class="synopsis">
                Board the Millennium Falcon and journey to a galaxy far, 
                far away in Solo: A Star Wars Story, an all-new adventure 
                with the most beloved scoundrel in the galaxy. 
                Through a series of daring escapades deep within a dark and 
                dangerous criminal underworld, Han Solo meets his mighty 
                future copilot Chewbacca and encounters the notorious gambler 
                Lando Calrissian, in a journey that will set the course of 
                one of the Star Wars saga's most unlikely heroes.
            </p><br></br>
            <a>Book Tickets</a>
        </div>
    </div>
    </div>
  )
}