import axios from 'axios'

const apiKey = '32b505ad97d74b2240d8dc1a60c92339'
const apiUrlBase = 'https://api.themoviedb.org/3'
const getUrlSearch = query => 
	`${apiUrlBase}/search/movie?query=${query}&api_key=${apiKey}`


export const getMoviePolular = () => {
	const popularMovies = 'popular'
	const url = `https://api.themoviedb.org/3/movie/${popularMovies}?api_key=${apiKey}`
	return axios.get( url )
		.then((data) => data.data.results)
  
}


export const getMovieNowPlaying = () => {
	const nowPlayingMovies = 'now_playing'
	const url = `https://api.themoviedb.org/3/movie/${nowPlayingMovies}?api_key=${apiKey}`
	return axios.get( url )
		.then((data) => data.data.results)
  
}

export const getMovieTopRate = () => {
	const topRatedMovies = 'top_rated'
	const url = `https://api.themoviedb.org/3/movie/${topRatedMovies}?api_key=${apiKey}`
	return axios.get( url )
		.then((data) => data.data.results)
  
}

export const getMovieUpComing = () => {
	const upcomingMovies = 'upcoming'
	const url = `https://api.themoviedb.org/3/movie/${upcomingMovies}?api_key=${apiKey}`
	return axios.get( url )
		.then((data) => data.data.results) 	
		
}

export const findMovie = (query) => {
	const url = getUrlSearch(query)
	return axios.get( url )
		.then((data) => data.data.results)
}