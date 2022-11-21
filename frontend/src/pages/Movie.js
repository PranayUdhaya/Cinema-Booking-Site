import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';

export default function Movie() {
    const {id} = useParams()
    
    const [fetched, setFetched] = useState(false);
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        if (!fetched) {
            const fetchData = async () => {
                const movie = {
                    movieId: id
                }
                const response = await fetch("http://localhost:5000/movies/findMovie", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(movie),
                })
                .catch(error => {
                window.alert(error);
                    return;
                });
                if (response.ok) {
                    const movieObject = await response.json()
                    console.log(movieObject)
                    setMovie(movieObject)
                    setFetched(true)
                }


            }
        
            fetchData()
        }        
    }, [])



    

    return (
        <div class="movieDetails" key={movie._id}>
            <h1 class="detailsTitle">{movie.title}</h1>
            <div class="detailsTop">
                <img class="detailsPoster" src={movie.picture}></img>
                <iframe class="detailsTrailer" src={movie.trailer} allowFullScreen></iframe>
            </div>
            <div class="detailsBottom">
                <div class="infoStrip">
                    <h3 class="detailHeading">Category: {movie.category}</h3>

                    <h3 class="detailHeading">Rated: {movie.ageRating}</h3>
                    <h3 class="detailHeading">Director: {movie.director}</h3>
                    <h3 class="detailHeading">Producer: {movie.producer}</h3>
                    <h3 class="detailHeading">Cast: {movie.cast}</h3>
                    <h3 hidden class="detailHeading">Reviews: 6.9/10</h3>
                </div>
                <h3 class="detailHeading">Synopsis: </h3>
                <p class="synopsis">
                    {movie.synopsis}
                </p><br></br>
                <a href="/book">Book Tickets</a>
            </div>
        </div>
    )
}
