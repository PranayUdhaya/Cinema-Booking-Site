import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class ForgotPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: window.sessionStorage.getItem("email"),
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

  async handleSubmit(event) {
    // Call backend methed to verify login and return success of failure
    // call displayFailure if failed
    // call createSession if sucess
    //this.displayFailure(event);
    // When a post request is sent to the create url, we'll add a new record to the database.
  //const newPerson = { ...form };
  const potentialUser = {
    email: this.state.email,
  }

  const response = await fetch("http://localhost:5000/users/forgetPassword", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(potentialUser),
  })
  .catch(error => {
    window.alert(error);
    return;
  });
  //console.log(response.ok);
  const showingsObject = await response.json()
  console.log(response);
    if (!response.ok) {
        window.alert("Incorrect email");
        return;
    } else {
        window.sessionStorage.setItem("email", this.state.email)
        window.location.href = "/forgotpassword";
    }

    const record = await response.json();
    console.log(record);
    console.log(record.password);
    window.location.href = "/forgotpassword";

    //window.location.href = "/home";
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
              <p>A verification code has been sent to {window.sessionStorage.getItem("email")}</p>
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