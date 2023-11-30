 import React from 'react';
 import './Media.css';

const MovieList = (props) => {

	
	const Favourite = props.Addcomponent;

	return (

		<>

			{props.movies.map((movie, index) => (
				
				movie.Poster && movie.Poster !== 'N/A' && (

					<div className='imgdiv' key={movie.imdbID}>
						<img src={movie.Poster} alt={`movie poster ${movie.imdbID}`} />
						<p className='movieTitle'>{movie.Title}</p>
						<div className='overlay' onClick={() => props.handleComponentClick(movie)}>
						 
						{Favourite && <Favourite />}

						</div>

					</div>
				)
			))}

		</>
	);
};

export default MovieList;
