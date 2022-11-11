import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

export default function Browse() {
  return (
    <div>
    <div class="selectSeat">
        <h1 class="seatTitle">Select Seats</h1>
        <form>
            <div class="seatSelector">
                <div class="screen"></div>
                <div class="row">
                    <h6 class="rowTitle">Row 1</h6>
                    <label class="seatContainer">
                        <input type="checkbox" id="1A"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="1B"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="1C"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="1D"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="1E"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="1F"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="1G"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="1H"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="1I"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="1J"></input>
                    </label>
                </div>
                <div class="row">
                    <h6 class="rowTitle">Row 2</h6>
                    <label class="seatContainer">
                        <input type="checkbox" id="2A"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="2B"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="2C"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="2D"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="2E"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="2F"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="2G"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="2H"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="2I"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="2J"></input>
                    </label>
                </div>
                <div class="row">
                    <h6 class="rowTitle">Row 3</h6>
                    <label class="seatContainer">
                        <input type="checkbox" id="3A"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="3B"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="3C"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="3D"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="3E"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="3F"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="3G"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="3H"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="3I"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="3J"></input>
                    </label>
                </div>
                <div class="row">
                    <h6 class="rowTitle">Row 4</h6>
                    <label class="seatContainer">
                        <input type="checkbox" id="4A"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="4B"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="4C"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="4D"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="4E"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="4F"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="4G"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="4H"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="4I"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="4J"></input>
                    </label>
                </div>
                <div class="row">
                    <h6 class="rowTitle">Row 5</h6>
                    <label class="seatContainer">
                        <input type="checkbox" id="5A"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="5B"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="5C"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="5D"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="5E"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="5F"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="5G"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="5H"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="5I"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="5J"></input>
                    </label>
                </div>
                <div class="spacer">

                </div>
                <div class="row">
                    <h6 class="rowTitle">Row 6</h6>
                    <label class="seatContainer">
                        <input type="checkbox" id="6A"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="6B"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="6C"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="6D"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="6E"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="6F"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="6G"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="6H"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="6I"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="6J"></input>
                    </label>
                </div>
                <div class="row">
                    <h6 class="rowTitle">Row 7</h6>
                    <label class="seatContainer">
                        <input type="checkbox" id="7A"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="7B"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="7C"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="7D"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="7E"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="7F"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="7G"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="7H"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="7I"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="7J"></input>
                    </label>
                </div>
                <div class="row">
                    <h6 class="rowTitle">Row 8</h6>
                    <label class="seatContainer">
                        <input type="checkbox" id="8A"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="8B"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="8C"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="8D"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="8E"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="8F"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="8G"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="8H"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="8I"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="8J"></input>
                    </label>
                </div>
                <div class="row">
                    <h6 class="rowTitle">Row 9</h6>
                    <label class="seatContainer">
                        <input type="checkbox" id="9A"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="9B"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="9C"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="9D"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="9E"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="9F"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="9G"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="9H"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="9I"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="9J"></input>
                    </label>
                </div>
                <div class="row">
                    <h6 class="rowTitle" id="row10">Row 10</h6>
                    <label class="seatContainer">
                        <input type="checkbox" id="10A"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="10B"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="10C"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="10D"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="10E"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="10F"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="10G"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="10H"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="10I"></input>
                    </label>
                    <label class="seatContainer">
                        <input type="checkbox" id="10J"></input>
                    </label>
                </div>
                <div class="letterRow">
                    <h6 class="columnTitle">A</h6>
                    <h6 class="columnTitle">B</h6>
                    <h6 class="columnTitle">C</h6>
                    <h6 class="columnTitle">D</h6>
                    <h6 class="columnTitle">E</h6>
                    <h6 class="columnTitle">F</h6>
                    <h6 class="columnTitle">G</h6>
                    <h6 class="columnTitle">H</h6>
                    <h6 class="columnTitle">I</h6>
                    <h6 class="columnTitle">J</h6>
                </div>
            </div>
            <label for="youthCount" class="youthLabel">Amount of Youth Tickets: </label>
            <input class="textfield" type="text" id="youthCount" name="youthCount"></input><br></br>

            <label for="seniorCount">Amount of Senior Tickets: </label>
            <input class="textfield" type="text" id="seniorCount" name="seniorCount"></input><br></br><br></br>
            
            <input class="submit" type="submit" value="Continue"></input>
        </form>
    </div>
    </div>
  )
}