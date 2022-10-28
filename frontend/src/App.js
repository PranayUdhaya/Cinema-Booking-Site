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
import ForgotPasswordEmail from "./ForgotPasswordEmail";
import Home from "./Home";
import Login from "./Login";
import LoginPrompt from "./LoginPrompt";
import Movie from "./Movie";
import OrderConfirmation from "./OrderConfirmation";
import OrderHistory from "./OrderHistory";
import OrderSummary from "./OrderSummary";
import Search from "./Search";
import Seat from "./Seat";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import CustomerNavbar from "./CustomerNavbar";
import AdminNavbar from "./AdminNavbar";
import './styles.css';
import EmailVerify from "./EmailVerify";
 
const App = () => {
	let logged = sessionStorage.getItem("loggedIn");
	let Component;
	let CurrentNav = Navbar;
	if (logged == "true") {
		CurrentNav = CustomerNavbar;
	}
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
			//CurrentNav = null;
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
	case "/users/:id/verify/:token":
			Component = EmailVerify;
			break;
    case "/forgotpasswordemail":
        Component = ForgotPasswordEmail;
		break;
  }
 return (
    <div>
      <CurrentNav />
      <div className="container"><Component /></div>
    </div>
  );
};
 
export default App;
