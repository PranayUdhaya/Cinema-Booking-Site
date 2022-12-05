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
            promo: "",
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleContinue = this.handleContinue.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        });
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


    handleContinue() {
        window.location.href = "/orderconfirmation"
    }

    render() {
        return (
            <div>
                <div class="checkout">
                    <h1 class="checkoutTitle">Checkout</h1>
                    <div class="checkoutPay">
                        <h2 class="checkoutPayTitle">Selected Payment Card</h2>
                        {this.state.chosenCard && <div class="selectedCard">
                        <div key={this.state.chosenCard._id}>
                                <p>{this.state.chosenCard.type}</p>
                                <p>**** **** **** {this.state.chosenCard.cardLastFour}</p>
                                <p>{this.state.chosenCard.address}</p>
                            </div>
                        </div>}
                        {this.state.cardsArray && this.state.cardsArray.map((card) => (
                            <div key={card._id}>
                                <p>{card.type}</p>
                                <p>**** **** **** {card.cardLastFour}</p>
                                <p>{card.address}</p>
                                <a>Choose this card</a>
                                <br></br>
                            </div>
                            )) 
                        }
                    </div>
                    <button onClick={this.handleContinue}>Place Order</button>
                    <a>Cancel Transaction</a>
                </div>
            </div>
        )
    }
}

export default Checkout