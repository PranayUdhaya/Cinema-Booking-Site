import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class ScheduleMovie extends React.Component {

    constructor(props) {
        super(props);

    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <div class="manageMoviesDetails">
                <h4>Schedule a Movie</h4>
                <label for="premiere">Enter Premiere Date: </label><br></br>
                <input class="textfield" type="date" id="premiere" name="premiere"></input><br></br>

                <label for="finalShow">Enter Final Showing Date: </label><br></br>
                <input class="textfield" type="date" id="finalShow" name="finalShow"></input><br></br>
            
                <label for="showtimes">Enter Daily Showtimes: </label><br></br>
                <input class="textfield" type="text" id="showtimes" name="showtimes"></input><br></br>
            </div>
        )
    }
}

export default ScheduleMovie;