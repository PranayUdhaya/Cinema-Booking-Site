import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export default function CreateConfirmation() {
  return (
    <div>
        <div class="createAccount">
            <h1>Verify Email</h1><br></br>
            <p>A verification code has been sent to cinemas@movies.com</p><br></br>
            <form method="post">
                <label for="confCode">Enter code:</label>
                <input class="smalltextfield" type="text" id="confCode" name="email"></input>
                <input class="submit" type="submit" value="Enter"></input>
            </form> 
        </div>
    </div>
  )
}