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
          subtotal: "",
          total: "",
          ticketsArray: JSON.parse(sessionStorage.getItem("cart")).cart.tickets,
          promoCode: "",
          foundPromo: "",
        };


    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calcSubtotal = this.calcSubtotal.bind(this);
        this.calcTotal = this.calcTotal.bind(this);
        this.checkPromo = this.checkPromo.bind(this);
      }

      handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        });
      }

      componentDidMount() {
        this.calcNums()
      }

      calcNums() {

        let a = 0
        let y = 0
        let e = 0

        console.log(this.state.cart)
        const ticketsArray = this.state.ticketsArray
        for (let i in ticketsArray) {
            console.log(ticketsArray[i].type)
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

        this.calcTotal()
      }

      calcSubtotal() {
        let sub = 0
        for (let ticket in this.state.ticketsArray) {
            sub += this.state.ticketsArray[ticket].price
        }
        console.log(sub)
        this.setState({subtotal: sub})
        return sub
      }

      calcTotal() {
        console.log(this.state.total)
        let tot = this.calcSubtotal()
        if (this.state.foundPromo && this.state.foundPromo <= 100) {
            tot = tot * (1 - (this.state.foundPromo/100))
        }
        console.log(tot)
        tot = tot * 1.06
        tot = Math.round(tot * 100) / 100
        this.setState({total: tot.toPrecision(4)})
      }

      handleSubmit(event) {
        event.preventDefault()
        window.location.href="/checkout"
      }

      async checkPromo(event) {
        event.preventDefault()

        const promoQuery = {
            code: this.state.promo
          }
        
          console.log(promoQuery)
          const response = await fetch("http://localhost:5000/checkpromo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(promoQuery),
          })
          .catch(error => {
           window.alert(error);
            return;
          });

        console.log(response)
        const record = await response.json();
        console.log(record)
        if (response.status == 404) {
            window.alert("Response error")
            return
        }
        if (response.status == 400) {
            window.alert("Promo code not valid")
            return
        }
        this.setState({foundPromo: record.discount})
        this.calcTotal()

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

                {this.state.ticketsArray &&
                    <div>
                        <p>Seats: {this.state.ticketsArray.map((ticket) => (
                            ticket.identifier+ "  "
                        ))}</p>
                        {this.state.numAdult > 0 && <div>
                            <p>Adult Tickets x{this.state.numAdult}</p>
                            <p>Unit Price $12</p>
                            <br></br>
                        </div>}
                        {this.state.numElder > 0 && <div>
                            <p>Senior Tickets x{this.state.numElder}</p>
                            <p>Unit Price $9</p>
                            <br></br>
                        </div>}
                        {this.state.numYouth > 0 && <div>
                            <p>Youth Tickets x{this.state.numYouth}</p>
                            <p>Unit Price $8</p>
                            <br></br>
                        </div>}
                    </div>
                }
            </div>
            <div class="orderBottom">
                <div class="orderTotal">
                    {this.state.cart && <div>
                        {/*this.state.cart.promo !== 0 && <p>Discount: -{this.state.cart.promo}%</p>*/}
                        <p>Subtotal: ${this.state.subtotal}</p>
                        <p>Total: ${this.state.total}</p>
                    </div>}
                </div>
                <div>
                    <label htmlFor="promo">Enter Promo: </label>
                    <input class="textfield" type="text" name="promo" id="promo"  value={this.state.promo} onChange={this.handleInputChange}></input>
                    <button onClick={this.checkPromo}>Apply</button>
                    <br></br><br></br>
                </div>
                <button>Cancel</button>
                <button onClick={this.handleSubmit}>Continue to Checkout</button>
            </div>
        </form>
    </div>
    </div>
  )
    }
}

export default OrderSummary