import React from "react";
import Book from "./pages/Book";
import Browse from "./pages/Browse";
import ChangePassword from "./pages/ChangePassword";
import Checkout from "./pages/Checkout";
import CreateAccount from "./pages/CreateAccount";
import CreateConfirmation from "./pages/CreateConfirmation";
import EditProfile from "./pages/EditProfile";
import EnterPayment from "./pages/EnterPayment";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordEmail from "./pages/ForgotPasswordEmail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginPrompt from "./pages/LoginPrompt";
import Movie from "./pages/Movie";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderHistory from "./pages/OrderHistory";
import OrderSummary from "./pages/OrderSummary";
import Search from "./pages/Search";
import Seat from "./pages/Seat";
import { Switch, Link, Route, Routes } from "react-router-dom";
import Navbar from "./navbars/Navbar";
import CustomerNavbar from "./navbars/CustomerNavbar";
import AdminNavbar from "./navbars/AdminNavbar";
import './styles.css';
import EmailVerify from "./EmailVerify";
import EmptyNavbar from "./navbars/EmptyNavbar.js";
import CustomerRoutes from "./Routing/CustomerRoutes.js";
//import LoginRoutes from "./Routing/LoginRoutes.js" 
import PasswordRoutes from "./Routing/PasswordRoutes.js"
import AdminRoutes from "./Routing/AdminRoutes.js"
import GuestRoutes from "./Routing/GuestRoutes.js"
//import CreatingAccountRoutes from "./Routing/CreatingAccountRoutes.js"

const App = () => {
	let logged = sessionStorage.getItem("loggedIn");
    let admin = sessionStorage.getItem("admin");
	let Component;
	let CurrentNav = Navbar;
	if (logged == "true") {
		CurrentNav = CustomerNavbar;
	}
    if (admin == "true") {
        CurrentNav = AdminNavbar;
    }

 return (
    <>
        <CurrentNav />
        {/*<div className="container"><Component /></div>*/}
        <Routes>
            <Route path="/" element=<Home/> />
            <Route path="/home" element=<Home/> />
            <Route path="/browse" element=<Browse/> />
            <Route path="/movie" element=<Movie/> />
            <Route path="/search" element=<Search/> />
            <Route element = { <CustomerRoutes /> }>
                <Route path="/book" element=<Book/> />
                <Route path="/editprofile" element=<EditProfile/> />
                <Route path="/checkout" element=<Checkout /> />
                <Route path="/enterpayment" element=<EnterPayment/> />
                <Route path="/orderconfirmation" element=<OrderConfirmation /> />
                <Route path="/orderhistory" element=<OrderHistory/> />
                <Route path="/ordersummary" element=<OrderSummary/> />
                <Route path="/seat" element=<Seat/> />
            </Route>
            <Route element = { <AdminRoutes /> }>
                
            </Route>
            <Route element = { <PasswordRoutes /> }>
                <Route path="/changepassword" element=<ChangePassword /> />
                <Route path="/forgotpasswordemail" element=<ForgotPasswordEmail/> />
                <Route path="/forgotpassword" element=<ForgotPassword /> />
            </Route>
            <Route element = { <GuestRoutes /> }>
                <Route path="/createaccount" element=<CreateAccount/> />
                <Route path="/login" element=<Login/> />
                <Route path="/loginprompt" element=<LoginPrompt/> />
                <Route path="/createconfirmation" element=<CreateConfirmation/> />
                <Route path="/users/:id/verify/:token" element=<EmailVerify/> />

            </Route>
            <Route path="*" element=<Home /> />
        </Routes>

    </>
  );
};
 
export default App;
