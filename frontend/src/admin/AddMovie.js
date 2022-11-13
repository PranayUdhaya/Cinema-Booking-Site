import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class AddMovie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            category: "",
            cast1: "",
            cast2: "",
            cast3: "",
            director: "",
            producer: "",
            rating: "",
            synopsis: "",
            picture: "",
            trailer: "",
          };

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
      
        console.log(this.state)
        // When a post request is sent to the create url, we'll add a new record to the database.
        //const newPerson = { ...form };

        const castArray = [this.state.cast1, this.state.cast2, this.state.cast3]
        let castArrayString = JSON.stringify(castArray);

        

        const newMovie = {
          title: this.state.title,
          category: this.state.category,
          cast: castArrayString,
          director: this.state.director,
          producer: this.state.producer,
          ageRating: this.state.rating,
          synopsis: this.state.synopsis,
          picture: this.state.picture,
          trailer: this.state.trailer,
        }
        
        console.log(newMovie)
        const response = await fetch("http://localhost:5000/movies/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMovie),
        })
        .catch(error => {
         window.alert(error);
          return;
        });
        
          const record = await response.json();
          console.log(record);
          if (record.isMatch == false) {
              window.alert("Wrong password");
              return;
          } else {
              window.location.href = "/addmovie";
          }
  
        // window.alert(JSON.stringify(potentialUser));
      
          //setForm({ name: "", position: "", level: "" });
      
          //navigate("/");
          //this.pullData();
          console.log(this.state.email + this.state.pass + this.state.fname + this.state.lname + this.state.phone)
          //window.location.href = "/home";
      }

    render() {
        return (
            <div class="manageMoviesDetails">
                <h4>Add New Movie</h4>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Enter Movie Title:</label><br></br>
                    <input class="textfield" type="text" id="title" name="title" value={this.state.title} onChange={this.handleInputChange}></input><br></br>
                    
                    <label htmlFor="category">Enter Movie Category:</label><br></br>
                    <input class="textfield" type="text" id="category" name="category" value={this.state.category} onChange={this.handleInputChange}></input><br></br>
                    
                    <label htmlFor="cast1">Enter Cast Member 1:</label><br></br>
                    <input class="textfield" type="text" id="cast1" name="cast1" value={this.state.cast1} onChange={this.handleInputChange}></input><br></br>

                    <label htmlFor="cast2">Enter Cast Member 2:</label><br></br>
                    <input class="textfield" type="text" id="cast2" name="cast2" value={this.state.cast2} onChange={this.handleInputChange}></input><br></br>

                    <label htmlFor="cast3">Enter Cast Member 3:</label><br></br>
                    <input class="textfield" type="text" id="cast3" name="cast3" value={this.state.cast3} onChange={this.handleInputChange}></input><br></br>
                    
                    <label htmlFor="director">Enter Director:</label><br></br>
                    <input class="textfield" type="text" id="director" name="director" value={this.state.director} onChange={this.handleInputChange}></input><br></br>
                    
                    <label htmlFor="producer">Enter Producer:</label><br></br>
                    <input class="textfield" type="text" id="producer" name="producer" value={this.state.producer} onChange={this.handleInputChange}></input><br></br>
        
                    <label htmlFor="rating">Enter MPAA-US Rating Code:</label><br></br>
                    <input class="textfield" type="text" id="rating" name="rating" value={this.state.rating} onChange={this.handleInputChange}></input><br></br>
                    
                    <label htmlFor="synopsis">Enter Synopsis:</label><br></br>
                    <textarea class="textfield" id="synopsis" name="synopsis" rows="8" cols="30" value={this.state.synopsis} onChange={this.handleInputChange}></textarea><br></br>
                    
                    <label htmlFor="picture">Add Promo Picture:</label><br></br>
                    <input class="textfield" type="url" id="picture" name="picture" value={this.state.picture} onChange={this.handleInputChange}></input><br></br>
                    
                    <label htmlFor="trailer">Enter Trailer Link:</label><br></br>
                    <input class="textfield" type="url" id="trailer" name="trailer" value={this.state.trailer} onChange={this.handleInputChange}></input><br></br>

                    <input class="textfield" type="submit" value="Submit" ></input><br></br>
                </form>
            </div>
        )
    }
}

export default AddMovie;