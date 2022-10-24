import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export default function EditProfile() {
  return (
    <div>
        <div class="createAccount">
            <h1>Edit Profile</h1>
                <form>
                    <h3>Change Password</h3>
                    <label for="pwd">Enter Password</label><br></br>
                    <input class="textfield" type="password" id="pwd" name="pwd"></input><br></br>
                    <label for="pwd">Enter New Password</label><br></br>
                    <input class="textfield" type="password" id="pwd" name="pwd"></input><br></br>
                    <label for="pwd">Confirm New Password</label><br></br>
                    <input class="textfield" type="password" id="pwd" name="pwd"></input><br></br><br></br>

                    <input class="submit" type="submit" value="Submit Changes"></input>
                </form>

                <form>
                    <h3>Edit Personal Info</h3>
                    <label for="fname">First Name</label><br></br>
                    <input class="textfield" type="text" id="fname" name="fname" value="Jason"></input><br></br>
                    <label for="lname">Last Name</label><br></br>
                    <input class="textfield" type="text" id="lname" name="lname" value="Bernard"></input><br></br>
                    <label for="phone">Phone Number</label><br></br>
                    <input class="textfield" type="tel" id="phone" name="phone" value="430-369-4260"></input><br></br><br></br>

                    <input class="submit" type="submit" value="Submit Changes"></input>
                </form>

                <form>
                    <h3>Edit Personal Address</h3>
                    <label for="address">Street Address</label><br></br>
                    <input class="textfield" type="text" id="address" name="address" value="124 Dandy Dr"></input><br></br>
                    <label for="city">City</label><br></br>
                    <input class="textfield" type="text" id="city" name="city" value="Athens"></input><br></br>
                    <label for="state">State</label><br></br>
                    <input class="textfield" type="text" id="state" name="state" value="GA"></input><br></br>
                    <label for="zip">Zipcode</label><br></br>
                    <input class="textfield" type="text" id="zip" name="zip" value="30601"></input><br></br><br></br>

                    <input class="submit" type="submit" value="Submit Changes"></input>
                </form>

                <div class="paymentDetails">
                    <h3>Payment Details</h3>
                    <h5>Saved Card</h5>
                    <h6 class="ticketItemInfo">Card Type: Visa</h6>
                    <h6 class="ticketItemInfo">Card Number: **** **** **** 5848</h6>
                    <a>Remove Card</a><br></br>
                    <a>Add New Card</a>
                </div>

                <a>View Order History</a>
        </div>
    </div>
  )
}