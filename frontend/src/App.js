import React from "react";
import Book from "./Book";
import Browse from "./Browse";
import ChangePassword from "./ChangePassword";
import Checkout from "./Checkout";
import CreateAccount from "./CreateAccount";
import CreateConfirmation from "./CreateConfirmation";
import EditProfile from "./EditProfile";
import EnterPayment from "./EnterPayment";
import ForgotPassword from "./ForgotPassword";
import Home from "./Home";
import Login from "./Login";
import LoginPrompt from "./LoginPrompt";
import Movie from "./Movie";
import OrderConfirmation from "./OrderConfirmation";
import OrderHistory from "./OrderHistory";
import OrderSummary from "./OrderSummary";
import Search from "./Search";
import Seat from "./Seat";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./Navbar";
import './styles.css';
 
const App = () => {
	sessionStorage.getItem("loggedIn");
	let Component
	switch (window.location.pathname) {
		
		case "/":
			Component = Home;
			break;
		case "/book":
			Component = Book;
			break;
		case "/browse":
			Component = Browse;
			break;
    case "/changepassword":
			Component = ChangePassword;
			break;
    case "/checkout":
			Component = Checkout;
			break;
    case "/createaccount":
			Component = CreateAccount;
			break;
    case "/createconfirmation":
			Component = CreateConfirmation;
			break;
    case "/editprofile":
			Component = EditProfile;
			break;
    case "/enterpayment":
			Component = EnterPayment;
			break;
    case "/forgotpassword":
			Component = ForgotPassword;
			break;
    case "/home":
			Component = Home;
			break;
    case "/login":
			Component = Login;
			break;
    case "/loginprompt":
			Component = LoginPrompt;
			break;
    case "/movie":
			Component = Movie;
			break;
    case "/orderconfirmation":
			Component = OrderConfirmation;
			break;
    case "/orderhistory":
			Component = OrderHistory;
			break;
    case "/ordersummary":
      Component = OrderSummary;
      break;
    case "/search":
			Component = Search;
			break;
    case "/seat":
      Component = Seat;
      break;
  }
 return (
    <div>
      <Navbar />
      <div className="container"><Component /></div>
    </div>
  );
};
 
export default App;
