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
      phone: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  createUserObject(userFirstName, userLastName, userEmailAddress, password, userPhoneNumber) {
    const userObject = {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmailAddress,
        password: password,
        number: userPhoneNumber,
        status: "active",
        rememberMe: false
    }
    return userObject;

  }

  


  render() {
    return (
      <div>
          <div class="createAccount">
              <h1>Create Account</h1>
              <form class="form" onSubmit={this.handleSubmit}>
                  <label for="email">Enter Email</label><br></br>
                  <input class="textfield" type="email" id="email" name="email" required value={this.state.email} onChange={this.handleInputChange}></input><br></br>
                  <label for="pwd">Enter Password</label><br></br>
                  <input class="textfield" type="password" id="pwd" name="pwd" required></input><br></br>
                  <label for="pwd">Confirm Password</label><br></br>
                  <input class="textfield" type="password" id="pwd" name="pwd" required value={this.state.pass} onChange={this.handleInputChange}></input><br></br><br></br>

                  <h3>Enter Personal Info</h3>
                  <label for="fname">Enter First Name</label><br></br>
                  <input class="textfield" type="text" id="fname" name="fname" required value={this.state.fname} onChange={this.handleInputChange}></input><br></br>
                  <label for="lname">Enter Last Name</label><br></br>
                  <input class="textfield" type="text" id="lname" name="lname" required value={this.state.lname} onChange={this.handleInputChange}></input><br></br>
                  <label for="phone">Enter Phone Number</label><br></br>
                  <input class="textfield" type="tel" id="phone" name="phone" required value={this.state.phone} onChange={this.handleInputChange}></input><br></br><br></br>
                  
                  <h3>Enter Personal Address Info (optional)</h3>
                  <label for="address">Street Address</label><br></br>
                  <input class="textfield" type="text" id="address" name="address"></input><br></br>
                  <label for="city">City</label><br></br>
                  <input class="textfield" type="text" id="city" name="city"></input><br></br>
                  <label for="state">State</label><br></br>
                  <input class="textfield" type="text" id="state" name="state"></input><br></br>
                  <label for="homeZip">Zipcode</label><br></br>
                  <input class="textfield" type="text" id="homeZip" name="homeZip"></input><br></br><br></br>

                  <h3>Enter Payment Details (optional)</h3>
                  <label for="ctype">Enter Card Type</label><br></br>
                  <select class="textfield" name="ctype" id="ctype">
                      <option value="Visa">Visa</option>
                      <option value="Mastercard">Mastercard</option>
                      <option value="American Express">American Express</option>
                      <option value="Discover">Discover</option>
                      <option value="Other">Other</option>
                  </select><br></br>
                  <label for="cardNum">Enter Card Number</label><br></br>
                  <input class="textfield" type="number" id="cardNum" name="cardNum"></input><br></br>
                  <label for="cvc">Enter CVC</label><br></br>
                  <input class="textfield" type="number" id="cvc" name="cvc"></input><br></br>
                  <label for="expiration">Enter Expiration Date</label><br></br>
                  <input class="textfield" type="month" id="expiration" name="expiration" min="2022-09"></input><br></br><br></br>
                  
                  <h4>Enter Billing Address Info (optional)</h4>
                  <label for="address">Street Address</label><br></br>
                  <input class="textfield" type="text" id="address" name="address"></input><br></br>
                  <label for="city">City</label><br></br>
                  <input class="textfield" type="text" id="city" name="city"></input><br></br>
                  <label for="state">State</label><br></br>
                  <input class="textfield" type="text" id="state" name="state"></input><br></br>
                  <label for="billingZip">Zipcode</label><br></br>
                  <input class="textfield" type="text" id="billingZip" name="billingZip"></input><br></br><br></br>

                  <input class="submit" type="submit" value="Create Account"></input>
              </form>
              <h4>{this.state.email}</h4> 
          </div>
      </div>
    )
  }
}

export default CreateAccount;