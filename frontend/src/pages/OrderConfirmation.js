import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class OrderConfirmation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        }
    
        //this.handleInputChange = this.handleInputChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        
      }

      componentDidMount() {

      }

    render() {
        return (
            <div>
            <div class="orderSummary">
                <h1 class="summaryTitle">Order Confirmation</h1>
                <div class="bookingDetails">
                    <h6 class="bookingNumber">Booking Number: 892174572</h6>
                    <h6 class="emailVerify">An order confirmation has been sent to cinemas@movies.com</h6>
                </div>
                <h2>Order Summary</h2>
                    <div class="allTickets">
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
                        </div><div class="ticket">
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
                        <input class="textfield" type="button" id="cancel" name="cancel" value="Cancel Order"></input><br></br>
                        <input class="textfield" type="submit" value="Continue Browsing"></input>
                    </div>
            </div>
            </div>
        )
    }
}

export default OrderConfirmation