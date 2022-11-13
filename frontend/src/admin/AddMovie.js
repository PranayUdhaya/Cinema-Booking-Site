import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class AddMovie extends React.Component {

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
                <h4>Add New Movie</h4>
                <form>
                    <label for="title">Enter Movie Title:</label><br></br>
                    <input class="textfield" type="text" id="title" name="title"></input><br></br>
                    
                    <label for="category">Enter Movie Category:</label><br></br>
                    <input class="textfield" type="text" id="category" name="category"></input><br></br>
                    
                    <label for="cast">Enter Cast:</label><br></br>
                    <input class="textfield" type="text" id="cast" name="cast"></input><br></br>
                    
                    <label for="director">Enter Director:</label><br></br>
                    <input class="textfield" type="text" id="director" name="director"></input><br></br>
                    
                    <label for="producer">Enter Producer:</label><br></br>
                    <input class="textfield" type="text" id="producer" name="producer"></input><br></br>
        
                    <label for="rating">Enter MPAA-US Rating Code:</label><br></br>
                    <input class="textfield" type="text" id="rating" name="rating"></input><br></br>
                    
                    <label for="synopsis">Enter Synopsis:</label><br></br>
                    <textarea class="textfield" id="synopsis" name="synopsis" rows="8" cols="30"></textarea><br></br>
                    
                    <label for="picture">Add Promo Picture:</label><br></br>
                    <input type="file" id="picture" name="picture"></input><br></br>
                    
                    <label for="trailer">Enter Trailer Link:</label><br></br>
                    <input class="textfield" type="url" id="trailer" name="trailer"></input><br></br>

                    <input class="textfield" type="submit" value="Submit"></input><br></br>
                </form>
            </div>
        )
    }
}

export default AddMovie;