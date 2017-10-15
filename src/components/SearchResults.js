import React, { Component } from 'react'
import { Grid, Thumbnail } from 'react-bootstrap'
import { findMovie } from '../Services/api'

// import './SearchResults.css'

import MovieList from '../components/MovieList'
import SearchForm from '../components/SearchForm'


class SearchResults extends Component {
	
	constructor(props) {
		super(props)
		const { query } = props.match.params
		this.state = { movies: [], query }
		this.getMovies(query)
	}

	componentWillReceiveProps(props) {
		const { query } = props.match.params
		this.setState({movies: [], query})
		this.getMovies(query)
	}

	getMovies(query) {
		findMovie(query)
			.then(movies => this.setState({ movies, query }))
	}

	render() {
		const { movies, query } = this.state
		return (
			<Grid className="SearchResults">
				<h1>Search Results for <strong>"{ query }"</strong></h1>
				<SearchForm value={query}/>
				{movies.length
					? <MovieList movies={movies} />
					: <span>Loading...</span>}
			</Grid>
		)
	}
}

export default SearchResults