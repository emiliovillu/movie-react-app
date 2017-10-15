import React from 'react';
import { Grid } from 'react-bootstrap'

import SearchForm from '../components/SearchForm';

import './Home.css'

const Home = () => {
	return (
		<div className="Home">
			<div className="Home__curtain"></div>
			<div className="Home__cover">
				<Grid className="Home__grid">
					<div className="Home__search-box">
						<SearchForm size="lg"/>
					</div>
				</Grid>    
			</div>
		</div>
	);
}

export default Home;