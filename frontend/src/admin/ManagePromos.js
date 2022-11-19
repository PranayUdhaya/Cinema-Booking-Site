import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import ExistingPromos from "./ExistingPromos.js"

class ManagePromos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newPromoName: "",
            newPromoAmount: 0,
            newPromoDate: "",
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNewPromo = this.handleNewPromo.bind(this);
        this.handleEditPromo = this.handleEditPromo.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        });
    }

    async handleNewPromo(e) {
        e.preventDefault();

    }

    async handleEditPromo(e) {
        e.preventDefault();
        
    }

    render() {
        return (
            <div class="manageUsers">
                <h1 class="pageTitle">Manage Promotions</h1>
                <div class="manageUsersDetails">
                    <div class="addPromo">
                        <h4> Add New Promotion</h4>
                        <form onSubmit={this.handleNewPromo}>
                            <label htmlFor="pName">Enter New Promotion Code:</label><br></br>
                            <input class="textfield" type="text" id="pName" name="pName" value={this.state.newPromoName} onChange={this.handleInputChange}></input><br></br>
                            
                            <label htmlFor="amount">Enter Discount Percentage:</label><br></br>
                            <input class="textfield" type="number" id="amount" name="amount" min="1" max="100" value={this.state.newPromoAmount} onChange={this.handleInputChange}></input><br></br>

                            <label hidden htmlFor="pDate">Enter New Promotion Expiration:</label><br></br>
                            <input hidden class="textfield" type="text" id="pDate" name="pDate" value={this.state.newPromoDate} onChange={this.handleInputChange}></input><br></br>
                    
                            <input type="submit" value="Submit"></input><br></br>
                        </form>
                    </div>
                    <div class="editPromo">
                        <h4>Edit an Existing Promotion</h4>
                        <form onSubmit={this.handleEditPromo}>
                        <label htmlFor="pSearch">Search Promotion Code:</label><br></br>
                        <input class="textfield" type="search" id="pSearch" name="pSearch" ></input><br></br>
                        <input type="submit" value="Search"></input>
                        </form>
                    </div>
                    <div class="existingPromos">
                        <h4>Existing Promotions</h4>
                        <ExistingPromos />
                    </div>
                </div>
            </div>
        )
    }
}

export default ManagePromos;