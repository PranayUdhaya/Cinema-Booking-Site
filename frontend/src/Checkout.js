import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export default function Checkout() {
  return (
    <div>
        <div class="checkout">
            <h1 class="checkoutTitle">Checkout</h1>
            <div class="checkoutPay">
                <h2 class="checkoutPayTitle">Payment Card</h2>
                <div class="cardDetails">
                    <h6 class="defaultCard">Visa<br></br>**** **** **** 5848</h6>
                    <a class="chooseAnother">Choose another Card</a>
                    <a class="chooseAnother">Add New</a>
                </div>
            </div>
            <div class="checkoutPromo">
                <label for="promo">Enter Promo: </label>
                <input class="textfield" type="text" name="promo" id="promo"></input><br></br><br></br>
            </div>
            <a>Continue</a>
            <a>Cancel Transaction</a>
        </div>
    </div>
  )
}