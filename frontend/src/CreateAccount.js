import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

class CreateAccount extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      pass: "",
      pass2: "",
      phone: "",
      pAddress: "",
      pCity: "",
      pState: "",
      pZip: "",
      ctype: "",
      cardNum: "",
      cvc: "",
      expiration: "",
      bAddress: "",
      bCity: "",
      bState: "",
      bZip: "",
      promo: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePromo = this.handlePromo.bind(this);
  }

  /*async handleSubmit(event) {
    // Call backend methed to create account and return success of failure
      // call displayFailure if failed
    event.preventDefault();

  }*/





  // This function will handle the submission.
 async handleSubmit(e) {
  e.preventDefault();


  // When a post request is sent to the create url, we'll add a new record to the database.
  //const newPerson = { ...form };
  const newAccount = {
    firstName: this.state.fname,
    lastName: this.state.lname,
    email: this.state.email,
    password: this.state.pass,
    number: this.state.phone,
    status: "inactive",
    rememberMe: false,
    promo: this.state.promo,
  }


  await fetch("http://localhost:5000/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAccount),
  })
  .catch(error => {
   window.alert(error);
    return;
  });
  window.alert(JSON.stringify(newAccount));
  
  //setForm({ name: "", position: "", level: "" });


  window.location.href = "/home";
  console.log();
}


handlePromo(event) {
    this.state.promo = !this.state.promo
}



  displayFailure(event) {
    this.setState({pass: ''});
    alert("The email or password entered were incorrect. Please try again.");
    event.preventDefault();
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
              <h1>Create Account</h1>
              <form class="form" onSubmit={this.handleSubmit}>
                  <label htmlFor="email">Enter Email</label><br></br>
                  <input class="textfield" type="email" id="email" name="email" required value={this.state.email} onChange={this.handleInputChange}></input><br></br>
                  <label htmlFor="pass">Enter Password</label><br></br>
                  <input class="textfield" type="password" id="pass" name="pass" required value={this.state.pass} onChange={this.handleInputChange}></input><br></br>
                  <label htmlFor="pass2">Confirm Password</label><br></br>
                  <input class="textfield" type="password" id="pass2" name="pass2" required value={this.state.pass2} onChange={this.handleInputChange}></input><br></br><br></br>

                  <h3>Enter Personal Info</h3>
                  <label htmlFor="fname">Enter First Name</label><br></br>
                  <input class="textfield" type="text" id="fname" name="fname" required value={this.state.fname} onChange={this.handleInputChange}></input><br></br>
                  <label htmlFor="lname">Enter Last Name</label><br></br>
                  <input class="textfield" type="text" id="lname" name="lname" required value={this.state.lname} onChange={this.handleInputChange}></input><br></br>
                  <label htmlFor="phone">Enter Phone Number</label><br></br>
                  <input class="textfield" type="tel" id="phone" name="phone" required value={this.state.phone} onChange={this.handleInputChange}></input><br></br><br></br>
                  
                  <div hidden>
                  <h3>Enter Personal Address Info (optional)</h3>
                  <label htmlFor="pAddress">Street Address</label><br></br>
                  <input class="textfield" type="text" id="pAddress" name="pAddress" value={this.state.pAddress} onChange={this.handleInputChange}></input><br></br>
                  <label htmlFor="pCity">City</label><br></br>
                  <input class="textfield" type="text" id="pCity" name="pCity" value={this.state.pCity} onChange={this.handleInputChange}></input><br></br>
                  <label htmlFor="pState">State</label><br></br>
                  <input class="textfield" type="text" id="pState" name="pState" value={this.state.pState} onChange={this.handleInputChange}></input><br></br>
                  <label htmlFor="pZip">Zipcode</label><br></br>
                  <input class="textfield" type="text" id="pZip" name="pZip" value={this.state.pZip} onChange={this.handleInputChange}></input><br></br><br></br>
                    </div>

                  <h3>Enter Payment Details (optional)</h3>
                  <label htmlFor="ctype">Enter Card Type</label><br></br>
                  <select class="textfield" name="ctype" id="ctype" value={this.state.ctype} onChange={this.handleInputChange}>
                      <option value="Visa">Visa</option>
                      <option value="Mastercard">Mastercard</option>
                      <option value="American Express">American Express</option>
                      <option value="Discover">Discover</option>
                      <option value="Other">Other</option>
                  </select><br></br>
                  <label htmlFor="cardNum">Enter Card Number</label><br></br>
                  <input class="textfield" type="number" id="cardNum" name="cardNum" value={this.state.cardNum} onChange={this.handleInputChange}></input><br></br>
                  <label htmlFor="cvc">Enter CVC</label><br></br>
                  <input class="textfield" type="number" id="cvc" name="cvc" value={this.state.cvc} onChange={this.handleInputChange}></input><br></br>
                  <label htmlFor="expiration">Enter Expiration Date</label><br></br>
                  <input class="textfield" type="month" id="expiration" name="expiration" min="2022-09" value={this.state.expiration} onChange={this.handleInputChange}></input><br></br><br></br>
                  
                  <h4>Enter Billing Address Info (optional)</h4>
                  <label htmlFor="bAddress">Street Address</label><br></br>
                  <input class="textfield" type="text" id="bAddress" name="bAddress" value={this.state.bAddress} onChange={this.handleInputChange}></input><br></br>
                  <label htmlFor="bCity">City</label><br></br>
                  <input class="textfield" type="text" id="bCity" name="bCity" value={this.state.bCity} onChange={this.handleInputChange}></input><br></br>
                  <label htmlFor="bState">State</label><br></br>
                  <input class="textfield" type="text" id="bState" name="bState" value={this.state.bState} onChange={this.handleInputChange}></input><br></br>
                  <label htmlFor="bZip">Zipcode</label><br></br>
                  <input class="textfield" type="text" id="bZip" name="bZip" value={this.state.promoTrue} onChange={this.handleInputChange}></input><br></br><br></br>

                    <label htmlFor="promo">Opt in for Promotion Emails</label>
                    <input class="textfield" type="checkbox" id="promo" name="promo" onChange={this.handlePromo}></input><br></br>

                  <input class="submit" type="submit" value="Create Account"></input>
              </form>
          </div>
          <h1 hidden>{this.state.ctype}</h1>
          <h1 hidden>{this.state.expiration}</h1>
      </div>
    )
  }
}

export default CreateAccount;