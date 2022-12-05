import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class OrderSummary extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          cart: JSON.parse(sessionStorage.getItem("cart")),
          showing: JSON.parse(sessionStorage.getItem("currentShowing")),
          numAdult: "",
          numYouth: "",
          numElder: "",
        };


    
        //this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount() {
        this.calcNums()
      }

      calcNums() {
        let a, y, e = 0
        console.log(this.state.cart)
        const ticketsArray = this.state.cart.tickets
        for (let i in ticketsArray) {
            switch(ticketsArray[i].type) {
                case "adult":
                    a++
                    break
                case "youth":
                    y++
                    break
                case "elder":
                    e++
                    break
            }
        }

        this.setState({numAdult: a})
        this.setState({numYouth: y})
        this.setState({numElder: e})

      }

      handleSubmit() {

      }
    
    render() {
    return (
    <div>
        <div class="orderSummary">
        <h1 class="summaryTitle">Order Summary</h1>
        <form onSubmit={this.handleSubmit}>
            <div class="allTickets">
                <h2>Showing</h2>
                <p>{this.state.showing._id}</p>

                {this.state.cart.tickets &&
                    <div>
                        <p>Seats: {this.state.cart.tickets.map((ticket) => (
                            ticket.identifier+ "  "
                        ))}</p>
                        {this.state.numAdult > 0 && <div>
                            <p>Adult Tickets x{this.state.numAdult}</p>
                            <p>Unit Price $12</p>
                            <br></br>
                        </div>}
                        {this.state.numElder > 0 && <div>
                            <p>Senior Tickets x{this.state.numElder}</p>
                            <p>Unit Price $8</p>
                            <br></br>
                        </div>}
                        {this.state.numYouth > 0 && <div>
                            <p>Youth Tickets x{this.state.numYouth}</p>
                            <p>Unit Price $9</p>
                            <br></br>
                        </div>}
                    </div>
                }

                {this.state.cart && <div>
                    {/*this.state.cart.promo !== 0 && <p>Discount: -{this.state.cart.promo}%</p>*/}
                    <p>Subtotal: {this.state.cart.subtotal}</p>
                    <p>Total: {this.state.cart.total}</p>
                </div>}
            </div>
            <div class="orderBottom">
                <div class="orderTotal">
                    <h6 class="ticketPrice">Order Total: 74$</h6>
                </div>
                <button>Cancel</button>
                <input class="textfield" type="submit" value="Continue to Checkout"></input>
            </div>
        </form>
    </div>
    </div>
  )
    }
}

export default OrderSummary