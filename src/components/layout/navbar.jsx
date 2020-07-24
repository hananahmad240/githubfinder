import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

class Navbar extends Component {
	state = {
		link: 'http://youtube.com',
	};

	static defaultProps = {
		title: 'Github Finder',
		icon: 'fab fa-github',
	};
	render() {
		return (
			<Fragment>
				<nav className="navbar navbar-dark py-3 bg-dark mb-4 navbar-expand-sm">
					<div className="container">
						<Link to="/" className="navbar-brand">
							<i className={this.props.icon}></i>
							{this.props.title}
						</Link>

						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to="/" className="nav-link">
									Home
								</Link>
							</li>

							<li className="nav-item">
								<Link to="/about" className="nav-link">
									About
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</Fragment>
		);
	}
}

export default Navbar;
