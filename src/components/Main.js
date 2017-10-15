import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Home from '../Routes/Home'
import NowPlaying from '../Routes/NowPlaying'
import Popular from '../Routes/Popular'
import TopRated from '../Routes/TopRated'
import UpComing from '../Routes/UpComing'
import SearchResults from '../components/SearchResults'

const Main = () => (
	<div className="Main">
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/search/:query' component={ SearchResults } />
			<Route path='/popular' component={Popular}/>
			<Route path='/toprated' component={TopRated}/>
			<Route path='/upcoming' component={UpComing}/>
			<Route path='/nowplaying' component={NowPlaying}/>
		</Switch>
	</div>

)

export default Main