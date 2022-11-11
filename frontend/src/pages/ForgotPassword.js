import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class ForgotPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      failure: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Send email with verification code
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // Call backend methed to verify login and return success of failure
    // call displayFailure if failed
    // call createSession if sucess
    //this.displayFailure(event);
    window.location.href = "/home";
  }

  displayFailure(event) {
    this.setState({pass: ''});
    alert("The email or password entered were incorrect. Please try again.");
    event.preventDefault();
  }

  render() {
    return (
      <div>
          <div class="login">
              <h1>Forgot Password</h1>
              <p>A verification code has been sent to cinemas@movies.com</p>
              <form onSubmit={this.handleSubmit}>
                  <label for="verifcation">Enter verification code: </label><br></br>
                  <input class="textfield" type="text" id="verification" name="verification"></input><br></br>
                  <input class="submit" type="submit" value="Enter"></input>
              </form> 
          </div>
      </div>
    )
  }
}

export default ForgotPassword;