import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class OrderHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          orderArray: "",
        }
    
    }

    componentDidMount() {
        this.gatherOrders()
        console.log(this.state)
        
    }

    async gatherOrders() {
        const query = {
            email: sessionStorage.getItem("email")
        }
        
        const response = await fetch("http://localhost:5000/orders/find", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(query),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
        
        const record = await response.json();
        console.log(record)
        if (!response.ok) {
            window.alert("Response error")
            return
        }
        this.setState({orderArray: record})
    }

    render() {
        return (
            <div>
                <div class="orderSummary">
                    <h1 class="historyTitle">Order History</h1>
                    <br></br>
                    {this.state.orderArray && this.state.orderArray.map((order) => (
                        <div key={order._id}>
                            <h2>{order.dateReadable}</h2><br></br>
                            <p class="bookingNumber">Order Number: {order._id}</p>

                            <p>Showtime: {}</p>
                            <p>{order.seats}</p>
                            <p>Order Total: ${order.totalPrice.toPrecision(4)}</p>
                            <br></br>
                            <hr></hr>
                            <br></br>
                        </div>))}
                </div>
            </div>
    )
    }
}

export default OrderHistory