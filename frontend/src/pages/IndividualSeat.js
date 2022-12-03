import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

class IndividualSeat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: JSON.parse(window.sessionStorage.getItem("currentShowing")),
            movie: JSON.parse(window.sessionStorage.getItem("currentMovie")),
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
       
    }

    componentWillUnmount() {

    }

    handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
    
        this.setState({
          [name]: value
        });
    }
}

export default IndividualSeat;