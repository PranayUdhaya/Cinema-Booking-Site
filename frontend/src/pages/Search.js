import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleQuery: "",
            genreQuery: "",
            availability: "",
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        });
    }

    async handleSubmit(e) {
        e.preventDefault();

        const query = {
            title: this.state.titleQuery,
            category: this.state.genreQuery,
            availability: this.state.availability,
        }

        const response = await fetch("http://localhost:5000/search", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(query),
          })
          .catch(error => {
           window.alert(error);
            return;
          });

    }

    render() {
      return (
            <div>
            <div class="search">
                <div class="searchLine">
                    <form onSubmit={this.handleSubmit}>
                        <input class="searchBar" type="search" placeholder="Enter a Movie Title" value={this.state.titleQuery} onChange={this.handleInputChange}></input>
                        <input class="searchBar" type="search" placeholder="Enter a Movie Genre" value={this.state.genreQuery} onChange={this.handleInputChange}></input>
                        <label htmlFor="ctype">Enter Card Type</label><br></br>
                        <select class="textfield" name="availability" id="availability" value={this.state.availability} onChange={this.handleInputChange}>
                            <option value="All">All</option>
                            <option value="Currently Showing">Currently Showing</option>
                            <option value="Coming Soon">Coming Soon</option>
                        </select><br></br>
                        <input class="submit" type="submit" value="Search"></input>
                    </form>
                </div>
            </div>
            <div class="movieList">
                <div class="movieResult">
                    <img class="promoPoster" src="../images/solo.jpg"></img>
                    <div class="resultInfo">
                        <h2>Solo</h2>
                        <p>Rated: PG-13</p>
                        <a>View Movie Details</a>
                        <a>Book Tickets</a> 
                    </div>
                </div>
                <div class="movieResult">
                    <img class="promoPoster" src="../images/womanKing.jpg"></img>
                    <div class="resultInfo">
                        <h2>The Woman King</h2>
                        <p>Rated: PG-13</p>
                        <a>View Movie Details</a>
                        <a>Book Tickets</a> 
                    </div>
                </div>
                <div class="movieResult">
                    <img class="promoPoster" src="../images/weathering.jpg"></img>
                    <div class="resultInfo">
                        <h2>Weathering With You</h2>
                        <p>Rated: PG-13</p>
                        <a>View Movie Details</a>
                        <a>Book Tickets</a> 
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Search;