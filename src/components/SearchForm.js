import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap'

import './SearchForm.css'

class SearchForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: props.value || '',
			fireRedirect: false
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ 
			value: nextProps.value || '',
			fireRedirect: false
		})
	}
 
	handleChange(e) {
		this.setState({ value: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault()
		this.setState({ fireRedirect: true })
	}

	render() {
		const { fireRedirect, value: query } = this.state
		return (
			<form  className="SearchForm" onSubmit={ this.handleSubmit }>
				<FormGroup>
					<InputGroup bsSize={this.props.size}>
						<FormControl id="form__control"
							type="text" 
							onChange={this.handleChange}
							value={query}
							autoFocus
						/>
						<InputGroup.Button>
							<Button id="button_form" type="submit">Get your Movie</Button>
						</InputGroup.Button>
					</InputGroup>
				</FormGroup>
				{
					fireRedirect && query &&
										<Redirect to={`/search/${query}`} push/>
				}
			</form>
		);
	}
}


export default SearchForm;