import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class Checkout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenCard: "",
            cardsArray: "",
        }

    }

    componentDidMount() {
        this.fetchCards()
    }

    async fetchCards() {
        const query = {
            userId: sessionStorage.getItem("id")
          }
        
          
          const response = await fetch("http://localhost:5000/cards/find", {
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
          //console.log(response.ok);
          console.log(response);
          const record = await response.json();
          console.log(record)
          this.setState({cardsArray: record})
    }

    render() {
        return (
            <div>
                <div class="checkout">
                    <h1 class="checkoutTitle">Checkout</h1>
                    <div class="checkoutPay">
                        <h2 class="checkoutPayTitle">Payment Card</h2>
                        <div class="selectedCard">
                            <h6 class="defaultCard">Visa<br></br>**** **** **** 5848</h6>
                        </div>
                        {this.state.cardsArray && this.state.cardsArray.map((card) => (
                            <div key={card._id}>
                                <p>{card.type}</p>
                                <p>**** **** **** {card.cardLastFour}</p>

                                <a>Choose this card</a>
                            </div>
                            )) 
                        }
                    </div>
                    <div class="checkoutPromo">
                        <label htmlFor="promo">Enter Promo: </label>
                        <input class="textfield" type="text" name="promo" id="promo"></input><br></br><br></br>
                    </div>
                    <a>Continue</a>
                    <a>Cancel Transaction</a>
                </div>
            </div>
        )
    }
}

export default Checkout