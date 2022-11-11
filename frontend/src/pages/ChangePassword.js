import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class ChangePassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      failure: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(event) {
      // Call backend methed to verify login and return success of failure
      // call displayFailure if failed
      // call createSession if sucess
      this.displayFailure(event);
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
              <h1>Create a New Password</h1>
              <form method="post">
                  <label for="newPass">Enter new password: </label><br></br>
                  <input class="textfield" type="text" id="newPass" name="newPass"></input><br></br>
                  <label for="newConfirm">Confirm new password: </label><br></br>
                  <input class="textfield" type="text" id="newConfirm" name="newConfirm"></input><br></br>
                  <input class="submit" type="submit" value="Enter"></input>
              </form> 
          </div>
      </div>
    )
  }
}

export default ChangePassword;