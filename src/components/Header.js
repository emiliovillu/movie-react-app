import React from 'react'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, Navbar }  from 'react-bootstrap';

import './Header.css'

const Header = () => (
	<Navbar inverse collapseOnSelect id="navbar">
		<Navbar.Header>
			<Navbar.Brand>
				<Link to='/'>📽 MOVIE FINDER 📽</Link>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<LinkContainer to='/popular'>
					<NavItem eventKey={1}>Popular Movies</NavItem>
				</LinkContainer>
				<LinkContainer to='/upcoming'>
					<NavItem eventKey={2}>Upcoming Movies</NavItem>
				</LinkContainer>
				<LinkContainer to='/nowplaying'>
					<NavItem eventKey={2} href="#">Now Playing Movies</NavItem>
				</LinkContainer>
				<LinkContainer to='/toprated'>
					<NavItem eventKey={2} href="#">Top Rated Movies</NavItem>
				</LinkContainer>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)
export default Header
