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

    const castArray = [this.state.cast1, this.state.cast2, this.state.cast3]

        const newMovie = {
          title: this.state.title,
          category: this.state.category,
          cast: castArray,
          director: this.state.director,
          producer: this.state.producer,
          ageRating: this.state.rating,
          synopsis: this.state.synopsis,
          picture: this.state.picture,
          trailer: this.state.trailer,
        }
      
        
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
              console.log(record.lastName )
              console.log(record.firstName )
              console.log(record.number )
              this.setState({fname: record.firstName});
              this.setState({lname: record.lastName});
              this.setState({phone: record.number});
              this.setState({promo: record.promo});
              this.setState({isAdmin: record.admin});
              this.createSession();
              window.location.href = "/addmovie";
          }
  
        // window.alert(JSON.stringify(potentialUser));
      
          //setForm({ name: "", position: "", level: "" });
      
          //navigate("/");
          //this.pullData();
          console.log(this.state.email + this.state.pass + this.state.fname + this.state.lname + this.state.phone)
          //window.location.href = "/home";
      }

    render() {htmlFor
        return (
            <div class="manageMoviesDetails">
                <h4>Add New Movie</h4>
                <form>
                    <label htmlFor="title">Enter Movie Title:</label><br></br>
                    <input class="textfield" type="text" id="title" name="title"></input><br></br>
                    
                    <label htmlFor="category">Enter Movie Category:</label><br></br>
                    <input class="textfield" type="text" id="category" name="category"></input><br></br>
                    
                    <label htmlFor="cast1">Enter Cast Member 1:</label><br></br>
                    <input class="textfield" type="text" id="cast1" name="cast1"></input><br></br>

                    <label htmlFor="cast2">Enter Cast Member 2:</label><br></br>
                    <input class="textfield" type="text" id="cast2" name="cast2"></input><br></br>

                    <label htmlFor="cast3">Enter Cast Member 3:</label><br></br>
                    <input class="textfield" type="text" id="cast3" name="cast3"></input><br></br>
                    
                    <label htmlFor="director">Enter Director:</label><br></br>
                    <input class="textfield" type="text" id="director" name="director"></input><br></br>
                    
                    <label htmlFor="producer">Enter Producer:</label><br></br>
                    <input class="textfield" type="text" id="producer" name="producer"></input><br></br>
        
                    <label htmlFor="rating">Enter MPAA-US Rating Code:</label><br></br>
                    <input class="textfield" type="text" id="rating" name="rating"></input><br></br>
                    
                    <label htmlFor="synopsis">Enter Synopsis:</label><br></br>
                    <textarea class="textfield" id="synopsis" name="synopsis" rows="8" cols="30"></textarea><br></br>
                    
                    <label htmlFor="picture">Add Promo Picture:</label><br></br>
                    <input type="file" id="picture" name="picture"></input><br></br>
                    
                    <label htmlFor="trailer">Enter Trailer Link:</label><br></br>
                    <input class="textfield" type="url" id="trailer" name="trailer"></input><br></br>

                    <input class="textfield" type="submit" value="Submit"></input><br></br>
                </form>
            </div>
        )
    }
}

export default AddMovie;