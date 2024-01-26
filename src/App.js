import React, { useEffect, useState } from "react";

import MovieList from "./component/MediaList/Media";

import Header from "./component/Header/Header";

import Search from "./component/Header/Search/Search";

import Favourites from "./component/Favourite/Favourite";

import RemoveFavourite from "./component/RemoveFavourite/Remove";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]); //to manage state for api

  const [searchValue, setSearchValue] = useState(""); // to manage state for search input

  const [favouriteMovie, setFavouriteMovie] = useState([]);

  const getMovieList = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=8bc29b13`;

    try {
      const response = await fetch(url);

      const data = await response.json();

      console.log("Response from API", data);

      // if (data.Search) {
      //   setMovies(data.Search);
      // } else {
      //   console.error("No Search results:", data);
      // }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    //to ensure app only load once when the API is
    //requested and if searchValue is empty  by default, search for hotel
    getMovieList(searchValue || "popular");
  }, [searchValue]);

  const AddFavouriteMovie = (movie) => {
    const newFavouriteMovie = [...favouriteMovie, movie];

    setFavouriteMovie(newFavouriteMovie);
  };

  const RemoveFavouriteMovie = (movie) => {
    const remove = favouriteMovie.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavouriteMovie(remove);
  };

  return (
    <div className="App">
      <div className="navbar">
        <Header heading="Movies" />
        <Search SearchValue={searchValue} SetSearchValue={setSearchValue} />
      </div>

      <div className="container">
        <MovieList
          movies={movies}
          handleComponentClick={AddFavouriteMovie}
          Addcomponent={Favourites}
        />
      </div>

<div className="fav">

<Header heading="Favourites" />
</div>
    
      <div className="favourites">

          <MovieList
            movies={favouriteMovie}
            handleComponentClick={RemoveFavouriteMovie}
            Addcomponent={RemoveFavourite}
          />
        </div>
 
    </div>
  );
}

export default App;
