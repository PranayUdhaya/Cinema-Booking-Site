import React from "react";
import IndividualSeat from "./IndividualSeat";

class Seat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showing: JSON.parse(window.sessionStorage.getItem("currentShowing")),
            movie: JSON.parse(window.sessionStorage.getItem("currentMovie")),
            activeArray: JSON.parse(window.sessionStorage.getItem("currentShowing")).seats,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSeatFlip = this.handleSeatFlip.bind(this);
    }

    componentDidMount() {
        console.log(this.state.showing)
        console.log(this.state.showing.seats)
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

    handleSeatFlip(event) {
        const flip = !this.state.activeArray[event.target.value];
        console.log(flip)
        this.setState({promo: flip});
        console.log(this.state.promo)
    }

     render() {   
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
                                    <input type="checkbox" id="1A" name="promo" value={this.state.promo} onChange={this.handleSeatUpdate} checked={this.state.activeArray[0]}></input>
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
}

export default Seat;

/*const {id} = useParams()

    const [showingFetched, setShowingFetched] = useState(false);
    const [movieFetched, setMovieFetched] = useState(false);
    const [movie, setMovie] = useState(null);
    const [showing, setShowing] = useState(null)
    const [movieFound, setMovieFound] = useState(true)
    const [showingFound, setShowingFound] = useState(true)

    useEffect(() => {

        if (!showingFetched) {
            const showingFetchData = async () => {
                const showingQuery = {
                    showingId: id
                }
                const response = await fetch("http://localhost:5000/showings/findone", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(showingQuery),
                })
                .catch(error => {
                window.alert(error);
                    return;
                });
                console.log(response)
                if (response.ok) {
                    const showingObject = await response.json()
                    console.log(showingObject)
                    setShowing(showingObject)
                    setShowingFetched(true)
                } else {
                    setShowingFound(false)
                }      

            }     
            showingFetchData()
        }     
        
        if (showingFetched && !movieFetched) {
            const movieFetchData = async () => {
                const movieQuery= {
                    movieId: showing.movie
                }
                const response = await fetch("http://localhost:5000/movies/findMovie", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(movieQuery),
                })
                .catch(error => {
                window.alert(error);
                    return;
                });
                if (response.ok) {
                    const movieObject = await response.json()
                    console.log(movieObject)
                    setMovie(movieObject)
                    setMovieFetched(true)
                } else {
                    window.location.href = "/home"

                }
            }
            movieFetchData()
        }

    }, [])*/