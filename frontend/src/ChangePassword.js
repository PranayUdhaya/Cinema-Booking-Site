import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export default function ChangePassword() {
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