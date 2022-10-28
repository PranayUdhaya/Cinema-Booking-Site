import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

function loginLink(props) {
    return <CustomLink href="/login">Login</CustomLink>;
}
  
function profileLink(props) {
    return <CustomLink href="/profile">Profile</CustomLink>;
}

export default function Navbar() {

    let LastLink;

    if (localStorage.getItem("loggedIn") == true) {
        LastLink = profileLink;
    } else {
        LastLink = loginLink;
    }

    return (
    <header>
        <img class="logo" src={require("./images/logo.png")} alt="logo"></img>
        <a class="siteName" href="./home">C7 Cinemas</a>
        <div class="searchLineHome">
           <input class="searchBar" type="search" placeholder="Enter a Movie Title"></input>
            <button class="searchButton">Search</button>
            </div>
        <nav>
            <ul class="nav_links">
                <CustomLink href="/browse">Browse</CustomLink>
                <CustomLink href="/search">Search</CustomLink>
                <LastLink />
                <CustomLink hidden href="/login">Login</CustomLink>
            </ul>
        </nav>
      </header>
    )
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname;
    return (
        <li className = {path === href ? "active" : ""}>
            <a href={href}>{children}</a>
        </li>
    )
}