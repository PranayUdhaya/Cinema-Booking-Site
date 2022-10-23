import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export default function Browse() {
  return (
    <div>
        <div class="orderSummary">
        <h1 class="summaryTitle">Order Summary</h1>
        <form>
            <div class="allTickets">
                <div class="ticket">
                    <div class="ticketLeft">
                        <img class="ticketPoster" src="./images/solo.jpg"></img>
                        <div class="ticketInfo">
                            <h2 class="ticketMovieTitle">Solo: A Star Wars Story</h2>
                            <h6 class="ticketItemInfo">Showtime: 4:00pm October 14th</h6>
                            <h6 class="ticketItemInfo">Type: Adult</h6>
                            <h6 class="ticketItemInfo">Ticket Price: 14$</h6>
                        </div>
                    </div>
                    <div class="ticketRight">
                        <div class="qty">
                            <label for="qty">Quantity: </label>
                            <input class="textfield" type="text" id="qty" name="qty" value="3"></input>
                        </div>
                        <div class="price">
                            <h6 class="ticketPrice">42$</h6>
                        </div>
                        <a class="remove">Remove</a>
                    </div>
                </div><div class="ticket">
                    <div class="ticketLeft">
                        <img class="ticketPoster" src="./images/solo.jpg"></img>
                        <div class="ticketInfo">
                            <h2 class="ticketMovieTitle">Solo: A Star Wars Story</h2>
                            <h6 class="ticketItemInfo">Showtime: 4:00pm October 14th</h6>
                            <h6 class="ticketItemInfo">Type: Youth</h6>
                            <h6 class="ticketItemInfo">Ticket Price: 10$</h6>
                        </div>
                    </div>
                    <div class="ticketRight">
                        <div class="qty">
                            <label for="qty">Quantity: </label>
                            <input class="textfield" type="text" id="qty" name="qty" value="2"></input>
                        </div>
                        <div class="price">
                            <h6 class="ticketPrice">20$</h6>
                        </div>
                        <a class="remove">Remove</a>
                    </div>
                </div>
                <div class="ticket">
                    <div class="ticketLeft">
                        <img class="ticketPoster" src="./images/solo.jpg"></img>
                        <div class="ticketInfo">
                            <h2 class="ticketMovieTitle">Solo: A Star Wars Story</h2>
                            <h6 class="ticketItemInfo">Showtime: 4:00pm October 14th</h6>
                            <h6 class="ticketItemInfo">Type: Senior</h6>
                            <h6 class="ticketItemInfo">Ticket Price: 12$</h6>
                        </div>
                    </div>
                    <div class="ticketRight">
                        <div class="qty">
                            <label for="qty">Quantity: </label>
                            <input class="textfield" type="text" id="qty" name="qty" value="1"></input>
                        </div>
                        <div class="price">
                            <h6 class="ticketPrice">12$</h6>
                        </div>
                        <a class="remove">Remove</a>
                    </div>
                </div>
            </div>
            <div class="orderBottom">
                <div class="orderTotal">
                    <h6 class="ticketPrice">Order Total: 74$</h6>
                </div>
                <input class="textfield" type="button" id="back" name="back" value="Back"></input><br></br>
                <input class="textfield" type="submit" value="Continue to Checkout"></input>
            </div>
        </form>
    </div>
    </div>
  )
}