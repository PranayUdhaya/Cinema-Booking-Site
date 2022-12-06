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
        this.chooseCard = this.chooseCard.bind(this)
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


    handleContinue(event) {
        event.preventDefault()
        if (!this.state.chosenCard) {
            window.alert("Please select or enter a payment card")
            return
        }
        sessionStorage.setItem("card", JSON.stringify(this.state.chosenCard))
        window.location.href = "/orderconfirmation"
    }

    addCard(event) {
        event.preventDefault()
        window.location.href="/addcard"
    }

    chooseCard(event) {
        event.preventDefault()
        const card = this.state.cardsArray[event.target.value]
        console.log(card)
        this.setState({chosenCard: card})
        console.log(this.state.chosenCard)
    }

    render() {
        return (
            <div>
                <div class="checkout">
                    <h1 class="checkoutTitle">Checkout</h1>
                    <div class="checkoutPay">
                        {this.state.chosenCard && <div class="selectedCard" key={this.state.chosenCard._id}>
                            <h2 class="checkoutPayTitle">Selected Payment Card</h2>
                            <br></br>
                            <p>{this.state.chosenCard.type}</p>
                            <p>**** **** **** {this.state.chosenCard.cardLastFour}</p>
                            <p>{this.state.chosenCard.address}</p>
                            <br></br>
                            <hr></hr>
                            <br></br>
                        </div>}
                        <h2>Saved Cards</h2>
                        {this.state.cardsArray && this.state.cardsArray.map((card, index) => (
                            <div key={card._id}>
                                <p>{card.type}</p>
                                <p>**** **** **** {card.cardLastFour}</p>
                                <p>{card.address}</p>
                                <button onClick={this.chooseCard} value={index}>Select this card</button>
                                <br></br>
                            </div>
                            )) 
                        }
                    </div>
                    <button onClick={this.addCard}>Add new card</button>
                    <button onClick={this.handleContinue}>Place Order</button>
                    <a>Cancel Transaction</a>
                </div>
            </div>
        )
    }
}

export default Checkout