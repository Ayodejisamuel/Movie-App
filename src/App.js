import React, { useEffect, useState } from "react";
import MovieList from "./component/MediaList/Media";
import Header from "./component/Header/Header";
import Search from "./component/Header/Search/Search";
import './App.css'
// import './App.css';
// import Navbar from './component/Navbar/navbar';
// import Intro from './component/Intro/intro';
// import Portfolio from './component/Portfolio/portfolio';
// import Contact from './component/Contact/contact';
// import Skills from './component/Skills/skills';
// import Footer from './component/Footer/footer';





function App() {

  const [movies, setMovies] = useState([])

  const [SearchValue, SetSearchValue] = useState('')

  const getMovieList = async () => {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=8bc29b13"

    const request = await fetch(url)

    const response = await request.json()


    console.log(response)

    if (response.Search) {

      setMovies(response.Search)
    }


  }


  useEffect(() => {    //to ensure app only load once when the API is requested.
    getMovieList( SearchValue)
  }, [SearchValue])

  return (
    <div className="container">

      <div className="navbar">

        <Header />
        <Search SearchValue={SearchValue} SetSearchValue={SetSearchValue} />

      </div>

      <div className="container">

        <MovieList movies={movies} />
        
      </div>

    </div>)


}

export default App;
