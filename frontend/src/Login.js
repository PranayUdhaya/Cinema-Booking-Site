import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export default function Login() {
  return (
    <div>
        <div class="login">
        <h1>Sign In</h1>
        <form method="post">
            <label for="email">Email</label><br></br>
            <input class="textfield" type="email" id="email" name="email"></input><br></br>
            <label for="pwd">Password</label><br></br>
            <input class="textfield" type="password" id="pwd" name="pwd"></input><br></br><br></br>
            <input class="submit" type="submit" value="Log In"></input>
        </form> 
        <a class="forgotPass" href="./forgotPass.html">Forgot Password</a>
        <a class="newAccount" href="./createAccount.html">Create New Account</a>
    </div>
    </div>
  )
}