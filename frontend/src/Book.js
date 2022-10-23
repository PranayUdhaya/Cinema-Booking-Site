import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export default function Book() {
  return (
    <div>
        <h1 class="bookTitle">Select Showtime</h1>
        <div class="bookMovie">
            <img class="bookPoster" src={require("./images/solo.jpg")}></img>
            <div class="bookInfo">
                <h2 class="bookMovieTitle">Solo: A Star Wars Story</h2>
                <form class="form" method="post">
                    <label for="date">Select Show Date</label><br></br>
                    <input class="textfield" type="date" id="date" name="date" min="2022-09-28"required></input><br></br><br></br>
                    <label for="showtime">Available Show Times</label><br></br>
                    <select class="textfield" name="showtime" id="showtime" required>
                        <option value="1200">12:00pm</option>
                        <option value="1300">1:00pm</option>
                        <option value="1400">2:00pm</option>
                        <option value="1500">3:00pm</option>
                        <option value="1600">4:00pm</option>
                    </select><br></br><br></br>
                    
                    <input class="submit" type="submit" value="Continue"></input>
                </form> 
            </div>
        </div>
    </div>
  )
}