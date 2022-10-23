import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div>
        <div class="login">
            <h1>Forgot Password</h1>
            <p>A verification code has been sent to cinemas@movies.com</p>
            <form method="post">
                <label for="verifcation">Enter verification code: </label><br></br>
                <input class="textfield" type="text" id="verification" name="verification"></input><br></br>
                <input class="submit" type="submit" value="Enter"></input>
            </form> 
        </div>
    </div>
  )
}