import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import ExistingPromos from "./ExistingPromos.js"

class ManagePromos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usersArray: "",
        }
    }

    componentDidMount() {
        this.gatherUsers()
    }

    componentWillUnmount() {

    }

    gatherUsers() {
        // Find all users fetch request
        
    }

    render() {
        return (
            <div class="manageUsers">
                <h1 class="pageTitle">Manage Users</h1>
                <h2>All Users</h2>
                {this.state.usersArray && this.state.usersArray.map((result) => (
                            <div class="promoResult" key={result._id}>
                                
                            </div>
                    ))}
            </div>
        )
    }
}

export default ManagePromos;