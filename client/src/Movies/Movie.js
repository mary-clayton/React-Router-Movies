import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './MovieList'

const Movie = (props) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
  
    const id = props.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          console.log(response.data)
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  });
  if (!movie) {
    return <div>Loading movie information...</div>;
  } 
  else {
     return <MovieList movie={movie} />;
  }
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  
}

export default Movie;
