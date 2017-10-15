import React, { Component } from 'react'
import { getMovieTopRate } from '../Services/api'
import { Grid, Row, Col,  Thumbnail }  from 'react-bootstrap'

import './StylesMovie.css'

class TopRated extends Component {
	constructor (props){
		super(props)
		this.state = {
			movies: [{
				poster_path: '',
				title: '',
				release_date: '',
				overview: ''
			}]
		} 	
	}

	componentDidMount(){
		getMovieTopRate().then(data => {
			this.setState({
				movies: data.map(movie => {
					return ({
						poster_path: movie.poster_path,
						title: movie.title,
						release_date: movie.release_date,
						overview: movie.overview
					})
				})
			})
		})
	}

	render () {
		return(
			<Grid>
				<Row>
					{this.state.movies.map(movie => {
						return (
							<Col xs={12} sm={6} md={3}>
								<Thumbnail 
									src={'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + movie.poster_path} 
									key={movie.id} 
									alt="242x200"
								>
									<h3>{movie.title}</h3>
									<p>{movie.release_date}</p>
									<p>{movie.overview.substring(0,100) + '...'}</p>
								</Thumbnail>
							</Col>
						)
					} 
					)}
				</Row>
			</Grid>
		)
	}
}
  
  


export default TopRated