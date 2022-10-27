import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
    };

    handleSubmit(event) {

    }

    handleInputChange(event) {
      const name = event.target.name;
      const value = event.target.value;
  
      this.setState({
        [name]: value
      });
    }

  render() {
    return (
      <div>
          <div class="login">
          <h1>Sign In</h1>
          <form onSubmit={this.handleSubmit}>
              <label for="email">Email</label><br></br>
              <input class="textfield" type="email" id="email" name="email" required value={this.state.email} onChange={this.handleInputChange}></input><br></br>
              <label for="pwd">Password</label><br></br>
              <input class="textfield" type="password" id="pwd" name="pwd" required value={this.state.pass} onChange={this.handleInputChange}></input><br></br><br></br>
              <input class="submit" type="submit" value="Log In"></input>
          </form> 
          <a class="forgotPass" href="./forgotPass.html">Forgot Password</a>
          <a class="newAccount" href="./createAccount.html">Create New Account</a>
      </div>
      </div>
    )
  }
}