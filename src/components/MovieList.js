import React from 'react';
import { Thumbnail } from 'react-bootstrap'

// import './MoviesList.css'

const MovieList = props => {
	return (
		<div className="MoviesList">
			{
				props.movies.map(movie => (
					<Thumbnail 
						key={ movie.id } 
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
						alt={ movie.title }
						className="MoviesList__thumbnail"
					>
						<h3>{ movie.title }</h3>
						<p>{movie.release_date}</p>
						<p>{ movie.overview.substring(0,100) + '...' }</p>
					</Thumbnail>
				))
			}
		</div>
	);
}

export default MovieList