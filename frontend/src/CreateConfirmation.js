import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

class CreateConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confCode: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // Call backend methed to verify code and return success or failure
    // call displayFailure if failed
    // this.displayFailure(event);
  }

  displayFailure(event) {
    this.setState({pass: ""});
    alert("The verification code entered was incorrect. Please try again.");
    event.preventDefault();
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
          <div class="createAccount">
              <h1>Account Created Successfully</h1>
              <h2>Verify Email</h2><br></br>
              <p>A verification code has been sent to cinemas@movies.com</p><br></br>
              <form onSubmit={this.handleSubmit}>
                  <label for="confCode">Enter code:</label>
                  <input class="smalltextfield" type="text" id="confCode" name="confCode" value={this.state.confCode} onChange={this.handleInputChange}></input>
                  <input class="submit" type="submit" value="Enter"></input>
              </form> 
              <button>Resend Code</button>
          </div>
      </div>
    )
  }
}

export default CreateConfirmation;