import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

export default function Browse() {
  return (
    <div>
    <div class="orderSummary">
        <h1 class="historyTitle">Order History</h1>
        <div class="pastOrder">
            <h2>September 27th, 2022</h2><br></br>
            <p class="bookingNumber">Booking Number: 892174572</p>
                <div class="allTicketsPast">
                    <div class="ticket">
                        <div class="ticketLeft">
                            <img class="ticketPoster" src="../images/solo.jpg"></img>
                            <div class="ticketInfo">
                                <h2 class="ticketMovieTitle">Solo: A Star Wars Story</h2>
                                <h6 class="ticketItemInfo">Showtime: 4:00pm October 14th</h6>
                                <h6 class="ticketItemInfo">Type: Adult</h6>
                                <h6 class="ticketItemInfo">Ticket Price: 14$</h6>
                            </div>
                        </div>
                        <div class="ticketRight">
                            <div class="qty">
                                <h6 class="ticketItemInfo">Quanity: 3</h6> 
                            </div>
                            <div class="price">
                                <h6 class="ticketPrice">42$</h6>
                            </div>
                        </div>
                    </div>
                    <div class="ticket">
                        <div class="ticketLeft">
                            <img class="ticketPoster" src="../images/solo.jpg"></img>
                            <div class="ticketInfo">
                                <h2 class="ticketMovieTitle">Solo: A Star Wars Story</h2>
                                <h6 class="ticketItemInfo">Showtime: 4:00pm October 14th</h6>
                                <h6 class="ticketItemInfo">Type: Youth</h6>
                                <h6 class="ticketItemInfo">Ticket Price: 10$</h6>
                            </div>
                        </div>
                        <div class="ticketRight">
                            <div class="qty">
                                <h6 class="ticketItemInfo">Quanity: 2</h6> 
                            </div>
                            <div class="price">
                                <h6 class="ticketPrice">20$</h6>
                            </div>
                        </div>
                    </div>
                    <div class="ticket">
                        <div class="ticketLeft">
                            <img class="ticketPoster" src="../images/solo.jpg"></img>
                            <div class="ticketInfo">
                                <h2 class="ticketMovieTitle">Solo: A Star Wars Story</h2>
                                <h6 class="ticketItemInfo">Showtime: 4:00pm October 14th</h6>
                                <h6 class="ticketItemInfo">Type: Senior</h6>
                                <h6 class="ticketItemInfo">Ticket Price: 12$</h6>
                            </div>
                        </div>
                        <div class="ticketRight">
                            <div class="qty">
                                <h6 class="ticketItemInfo">Quanity: 1</h6> 
                            </div>
                            <div class="price">
                                <h6 class="ticketPrice">12$</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="orderBottom">
                    <div class="orderTotal">
                        <h6 class="ticketPrice">Order Total: 74$</h6>
                    </div>
                </div>
            </div>
            <div class="pastOrder">
                <h2>August 12th, 2022</h2><br></br>
                <p class="bookingNumber">Booking Number: 293718443</p>
                    <div class="allTicketsPast">
                        <div class="ticket">
                            <div class="ticketLeft">
                                <img class="ticketPoster" src="../images/womanKing.jpg"></img>
                                <div class="ticketInfo">
                                    <h2 class="ticketMovieTitle">The Woman King</h2>
                                    <h6 class="ticketItemInfo">Showtime: 6:00pm August 14th</h6>
                                    <h6 class="ticketItemInfo">Type: Senior</h6>
                                    <h6 class="ticketItemInfo">Ticket Price: 12$</h6>
                                </div>
                            </div>
                            <div class="ticketRight">
                                <div class="qty">
                                    <h6 class="ticketItemInfo">Quanity: 1</h6> 
                                </div>
                                <div class="price">
                                    <h6 class="ticketPrice">12$</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="orderBottom">
                        <div class="orderTotal">
                            <h6 class="ticketPrice">Order Total: 12$</h6>
                        </div>
                    </div>
                </div>
    </div>
    </div>
  )
}