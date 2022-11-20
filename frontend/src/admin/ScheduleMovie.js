import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class ScheduleMovie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: props.movie,
            start: "",
            end: "",
            room: "",
            availability: props.availability,
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
      
      
        // When a post request is sent to the create url, we'll add a new record to the database.
        //const newPerson = { ...form };
        const newShowing = {
            movie: this.state.movie,
            start: this.state.start,
            end: this.state.end,
            room: this.state.room,

        }
      
      
        const response = await fetch("http://localhost:5000/showings/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newShowing),
        })
        .catch(error => {
         window.alert(error);
          return;
        });
        window.alert(JSON.stringify(newShowing));
        //sessionStorage.setItem("")
      }

    render() {
        return (
            <div class="manageMoviesDetails">
                <h4>Schedule {this.state.movie}</h4>
                <form onSubmit={this.handleAvailability}>
                <label htmlFor="availability">Set Availability: </label><br></br>
                <select class="textfield" name="availability" id="availability" value={this.state.availability} onChange={this.handleInputChange}>
                      <option value="Not Available">Not Available</option>
                      <option value="Currently Showing">Currently Showing</option>
                      <option value="Coming Soon">Coming Soon</option>
                  </select><br></br>
                </form>
                <form onSubmit={this.handleSumbit}>
                    <label htmlFor="date">Enter Date: </label><br></br>
                    <input class="textfield" type="date" id="date" name="date"></input><br></br>

                    <label htmlFor="start">Enter Start Time: </label><br></br>
                    <input class="textfield" type="number" id="start" name="start"></input><br></br>
                
                    <label htmlFor="showrooms">Select Showroom: </label><br></br>
                    <select class="textfield" name="showrooms" id="showrooms" value={this.state.room} onChange={this.handleInputChange}>
                      <option value="A">Showroom A</option>
                      <option value="B">Showroom B</option>
                    </select><br></br>
                </form>
            </div>
        )
    }
}

export default ScheduleMovie;