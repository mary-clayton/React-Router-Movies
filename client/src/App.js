import React, { useState } from 'react';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'
import SavedList from './Movies/SavedList';
import {BrowserRouter as Route} from "react-router-dom"
const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
  console.log(addToSavedList);

  return (
    <div>
      <SavedList list={savedList} />
      <div>
      <Movie />
      <MovieList />
      <Route path="/movies" component={MovieList}/>
      <Route path="/movies/:id" render={props => <Movie {...props} items= {savedList} />}/>
      </div>
    </div>
  );
};

export default App;
