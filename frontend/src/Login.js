import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      fname: "",
      lname: "",
      phone: "",
      status: "",
      rememberMe: "",
      failure: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    async handleSubmit(e) {
      e.preventDefault();
    
    
      // When a post request is sent to the create url, we'll add a new record to the database.
      //const newPerson = { ...form };
      const potentialUser = {
        email: this.state.email,
        password: this.state.pass,
      }
    
      
      const response = await fetch("http://localhost:5000/users/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(potentialUser),
      })
      .catch(error => {
       window.alert(error);
        return;
      });
      //console.log(response.ok);
      console.log(response);
      if (!response.ok) {
        window.alert("Incorrect email");
        return;
      }
        const record = await response.json();
        console.log(record);
        console.log(record.password);
        console.log(this.state.pass);
        if (record.password != this.state.pass) {
            window.alert("Wrong password");
            return
        } else {
            console.log(record.lastName )
            console.log(record.firstName )
            console.log(record.number )
            this.setState({
                [this.state.fname]: record.firstName,
                [this.state.lname]: record.lastName,
                [this.state.phone]: record.number
              });
              
        }

      // window.alert(JSON.stringify(potentialUser));
    
        //setForm({ name: "", position: "", level: "" });
    
        //navigate("/");
        //this.pullData();
        this.createSession();
        //window.location.href = "/home";
        console.log(this.state.email + this.state.pass + this.state.fname + this.state.lname + this.state.phone)
    }

        // const [records, setRecords] = useState([]);
            
       /* // This method fetches the records from the database.
            async getUserInfo() {
                const userEmail = { email: this.state.email };
                const response = await fetch("http://localhost:5000/users/session", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userEmail);
                });
            
                if (!response.ok) {
                    const message = `An error occurred: ${response.statusText}`;
                    window.alert(message);                        
                    return;
                }
                
                const userInfo = await response.json();
                setRecords(records);
            }   
            
            getUserInfo();            
            return;
        }
*/

    createSession(event) {
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("email", this.state.email);
        sessionStorage.setItem("fname", this.state.fname);
        sessionStorage.setItem("lname", this.state.lname);
        sessionStorage.setItem("phone", this.state.phone);
        //sessionStorage.setItem("status", "active");
        console.log(this.state.fname)
        console.log(this.state.lname)
        console.log(this.state.phone)

    }
    


    displayFailure(event) {
        this.setState({pass: ''});
        alert("The email or password entered were incorrect. Please try again.");
        event.preventDefault();
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
      <div>
          <div class="login">
            <h1>Sign In</h1>
            <form method="post" onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email</label><br></br>
                <input class="textfield" type="email" id="email" name="email" required value={this.state.email} onChange={this.handleInputChange}></input><br></br>
                <label htmlFor="pass">Password</label><br></br>
                <input class="textfield" type="password" id="pass" name="pass" required value={this.state.pass} onChange={this.handleInputChange}></input><br></br><br></br>
                <input class="submit" type="submit" value="Log In"></input>
            </form> 
            <h5 hidden>{this.state.failure}</h5>
            <a class="forgotPass" href="./forgotpassword">Forgot Password</a>
            <a class="newAccount" href="./createaccount">Create New Account</a>
        </div>
      </div>
    )
  }
}

export default Login;