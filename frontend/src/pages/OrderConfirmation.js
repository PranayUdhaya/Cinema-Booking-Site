import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class OrderConfirmation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            order: JSON.parse(sessionStorage.getItem("currentOrder")),
            showing: sessionStorage.getItem("currentShowing")
        }
    
        //this.handleInputChange = this.handleInputChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        
      }

      componentDidMount() {
        console.log(this.state)
      }

    render() {
        return (
            <div>
                <div class="orderSummary">
                <h1 class="summaryTitle">Order Confirmation</h1>
                <div class="bookingDetails">
                    <h6 class="bookingNumber">Order Number: {this.state.order && this.state.order._id}</h6>
                    <h6 class="emailVerify">An order confirmation has been sent to {sessionStorage.getItem("email")}</h6>
                </div>
                <h2>Order Details</h2>
                    {this.state.order && 
                    <div>
                        <p>Total: {}</p>
                    </div>}
                </div>
            </div>
        )
    }
}

export default OrderConfirmation