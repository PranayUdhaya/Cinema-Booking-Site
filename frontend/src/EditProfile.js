import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayfname: sessionStorage.getItem("fname"),
            displaylname: sessionStorage.getItem("lname"),
            displayphone: sessionStorage.getItem("phone"),
            fname: sessionStorage.getItem("fname"),
            lname: sessionStorage.getItem("lname"),
            pass: "",
            newPass: "",
            newPass2: "",
            phone: sessionStorage.getItem("phone"),
            pAddress: "",
            pCity: "",
            pState: "",
            pZip: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updatePersonalInfo = this.updatePersonalInfo.bind(this);
    }
    

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        });
    }
    
    async updatePassword(event) {
        event.preventDefault();
        
        /*if (this.state.newPass != this.state.newPass2) {
            alert("New Passwords do not match!");
            return;
        }*/
        
      // When a post request is sent to the create url, we'll add a new record to the database.
      //const newPerson = { ...form };
      

      
      const userPasswords = {
        email: sessionStorage.getItem("email"),
        password: this.state.pass,
        updatedPassword: this.state.newPass
      }
    
      console.log("email is: " + sessionStorage.getItem("email"));
      console.log("loggedIn is: " + sessionStorage.getItem("loggedIn"));

      await fetch("http://localhost:5000/users/updatepass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userPasswords),
      })
      .catch(error => {
       window.alert(error);
        return;
      });

      alert("Password updated");

      //window.alert(JSON.stringify(potentialUser));
    
      //setForm({ name: "", position: "", level: "" });
    
      //navigate("/");
    }

    async updatePersonalInfo(event) {
        event.preventDefault();

        const personalInfo = {
            email: sessionStorage.getItem("email"),
            firstName: this.state.fname,
            lastName: this.state.lname,
            number: this.state.phone
          }

          const response = await fetch("http://localhost:5000/users/updateinfo", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(personalInfo),
        })
        .catch(error => {
        window.alert(error);
            return;
        });
        const record = await response.json();
        sessionStorage.setItem("fname", this.state.fname)
        sessionStorage.setItem("lname", this.state.lname)
        sessionStorage.setItem("phone", this.state.phone)
        window.location.href = "/editprofile";
    }

    render() {
        return (
            <div>
                <div class="createAccount">
                    <h1>Edit Profile</h1>
                        <form onSubmit={this.updatePassword}>
                            <h3>Change Password</h3>
                            <label htmlFor="pass">Enter Password</label><br></br>
                            <input class="textfield" type="password" id="pass" name="pass" value={this.state.pass} onChange={this.handleInputChange}></input><br></br>
                            <label htmlFor="newPass">Enter New Password</label><br></br>
                            <input class="textfield" type="password" id="newPass" name="newPass" value={this.state.newPass} onChange={this.handleInputChange}></input><br></br>
                            <label htmlFor="newPass2">Confirm New Password</label><br></br>
                            <input class="textfield" type="password" id="newPass2" name="newPass2" value={this.state.newPass2} onChange={this.handleInputChange}></input><br></br><br></br>

                            <input class="submit" type="submit" value="Submit Changes"></input>
                        </form>

                        <form onSubmit={this.updatePersonalInfo}>
                            <h3>Edit Personal Info</h3>
                            <label htmlFor="fname">First Name: {sessionStorage.getItem("fname")}</label><br></br>
                            <input class="textfield" type="text" id="fname" name="fname" value={this.state.fname} onChange={this.handleInputChange}></input><br></br>
                            <label htmlFor="lname">Last Name: {sessionStorage.getItem("lname")}</label><br></br>
                            <input class="textfield" type="text" id="lname" name="lname" value={this.state.lname} onChange={this.handleInputChange}></input><br></br>
                            <label htmlFor="phone">Phone Number: {sessionStorage.getItem("phone")}</label><br></br>
                            <input class="textfield" type="tel" id="phone" name="phone" value={this.state.phone} onChange={this.handleInputChange}></input><br></br><br></br>
                            <label htmlFor="promo">Opt in for Promotion Emails</label>
                            <input class="textfield" type="checkbox" id="promo" name="promo" onChange={this.handleInputChange}></input><br></br><br></br>

                            <input class="submit" type="submit" value="Submit Changes"></input>
                        </form>

                        <div hidden>
                        <form onSubmit={this.updateAddress}>
                            <h3>Edit Personal Address</h3>
                            <label htmlFor="pAddress">Street Address</label><br></br>
                            <input class="textfield" type="text" id="address" name="pAddress" value={this.state.pAddress} onChange={this.handleInputChange}></input><br></br>
                            <label htmlFor="pCity">City</label><br></br>
                            <input class="textfield" type="text" id="pCity" name="pCity" value={this.state.pCity} onChange={this.handleInputChange}></input><br></br>
                            <label htmlFor="pState">State</label><br></br>
                            <input class="textfield" type="text" id="pState" name="pState" value={this.state.pState} onChange={this.handleInputChange}></input><br></br>
                            <label htmlFor="pZip">Zipcode</label><br></br>
                            <input class="textfield" type="text" id="pZip" name="pZip" value={this.state.pZip} onChange={this.handleInputChange}></input><br></br><br></br>
                            

                            <input class="submit" type="submit" value="Submit Changes"></input>
                        </form>
                        </div>

                        <div class="paymentDetails">
                            <h3>Payment Details</h3>
                            <h5>Saved Card</h5>
                            <h6 class="ticketItemInfo">Card Type: Visa</h6>
                            <h6 class="ticketItemInfo">Card Number: **** **** **** 5848</h6>
                            <a>Remove Card</a><br></br>
                            <a>Add New Card</a>
                        </div>

                        <a>View Order History</a>
                        <button class="logoutButton">logout</button>
                </div>
                
            </div>
        )
    }
}

export default EditProfile;