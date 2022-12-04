import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class AddCardCA extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      ctype: "",
      cardNum: "",
      cvc: "",
      expiration: "",
      bAddress: "",
      bCity: "",
      bState: "",
      bZip: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


 async handleSubmit(e) {
  e.preventDefault();

  const newCard = {
    userId: window.sessionStorage.getItem("id"),
    type: this.state.ctype,
    cardNumber: this.state.ctype,
    expDate: this.state.expiration,
    address: this.state.bAddress,
    city: this.state.bCity,
    state: this.state.bState,
    zip: this.state.bZip,
    securityCode: this.state.cvc,

  }


  const response = await fetch("http://localhost:5000/cards/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCard),
  })
  .catch(error => {
   window.alert(error);
    return;
  });

    console.log(response)
    const record = await response.json();
    console.log(response)
    if (!response.ok) {
        window.alert("Response error")
        return
    }

    //window.location.href = "/createconfirmation";
}




  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  createPaymentObject() {
    const paymentObject = {
      ctype: this.state.ctype,
      cardNum: this.state.cardNum,
      cvc: this.state.cvc,
      expiration: this.state.expiration,
      bAddress: this.state.bAddress,
      bCity: this.state.bCity,
      bState: this.state.bState,
      bZip: this.state.bZip
    }
  }  

  render() {
    return (
      <div>
          <div class="createAccount">
              <h1>Add New Card</h1>
              <form class="form" onSubmit={this.handleSubmit}>
                  <h3>Enter Payment Details</h3>
                  <label htmlFor="ctype">Enter Card Type</label><br></br>
                  <select class="textfield" name="ctype" id="ctype" value={this.state.ctype} onChange={this.handleInputChange} required>
                      <option value="Visa">Visa</option>
                      <option value="Mastercard">Mastercard</option>
                      <option value="American Express">American Express</option>
                      <option value="Discover">Discover</option>
                      <option value="Other">Other</option>
                  </select><br></br>
                  <label htmlFor="cardNum">Enter Card Number</label><br></br>
                  <input class="textfield" type="number" id="cardNum" name="cardNum" value={this.state.cardNum} onChange={this.handleInputChange} required></input><br></br>
                  <label htmlFor="cvc">Enter CVC</label><br></br>
                  <input class="textfield" type="number" id="cvc" name="cvc" value={this.state.cvc} onChange={this.handleInputChange} required></input><br></br>
                  <label htmlFor="expiration">Enter Expiration Date</label><br></br>
                  <input class="textfield" type="month" id="expiration" name="expiration" min="2022-09" value={this.state.expiration} onChange={this.handleInputChange} required></input><br></br><br></br>
                  
                  <h4>Enter Billing Address Info</h4>
                  <label htmlFor="bAddress">Street Address</label><br></br>
                  <input class="textfield" type="text" id="bAddress" name="bAddress" value={this.state.bAddress} onChange={this.handleInputChange} required></input><br></br>
                  <label htmlFor="bCity">City</label><br></br>
                  <input class="textfield" type="text" id="bCity" name="bCity" value={this.state.bCity} onChange={this.handleInputChange} required></input><br></br>
                  <label htmlFor="bState">State</label><br></br>
                  <input class="textfield" type="text" id="bState" name="bState" value={this.state.bState} onChange={this.handleInputChange} required></input><br></br>
                  <label htmlFor="bZip">Zipcode</label><br></br>
                  <input class="textfield" type="text" id="bZip" name="bZip" value={this.state.bZip} onChange={this.handleInputChange} required></input><br></br><br></br>

                  <input class="submit" type="submit" value="Submit"></input>
              </form>
              <a href="/createconfirmation">Skip for Now</a>
          </div>
      </div>
    )
  }
}

export default AddCardCA;