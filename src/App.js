import React, { Component, Fragment } from 'react';
import './App.css';
// import UserItem from './components/users/userItem';
// import Counter from './components/counter';
import Navbar from './components/layout/navbar';
import User from './components/users/User';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import SingleUser from './components/users/SingleUser';
// router module
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';

class App extends Component {
	// declare variable

	state = {
		users: [],
		loading: false, // for spinner
		alert: '',
		user: {}, //for single user
	};

	// async componentDidMount() {
	// 	this.setState({
	// 		loading: true,
	// 	});
	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
	// 	);

	// 	this.setState({
	// 		loading: false,
	// 		users: res.data,
	// 	});
	// }

	// search user
	// searchUser = async (text) => {
	// 	this.setState({
	// 		loading: true,
	// 	});
	// 	const res = await axios.get(
	// 		`https://api.github.com/search/users?q=${text}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
	// 	);
	// 	// console.log(res.data.items);

	// 	this.setState({
	// 		loading: false,
	// 		users: res.data.items,
	// 	});
	// };

	// clear User
	// clearUser = () => {
	// 	this.setState({
	// 		users: [],
	// 		loading: false,
	// 	});
	// };

	// alert message
	setAlert = (message) => {
		this.setState({
			alert: message,
		});
	};

	// get single user
	// getUser = async (userName) => {
	// 	this.setState({
	// 		loading: true,
	// 	});

	// 	const res = await axios.get(`https://api.github.com/users/${userName}`);
	// 	console.log(res.data);

	// 	this.setState({
	// 		loading: false,
	// 		user: res.data,
	// 	});
	// };

	render() {
		// return (
		// 	<Fragment>
		// 		<h1> Hanan Ahmad</h1>
		// 		<button>click</button>
		// 	</Fragment>
		// );

		// return React.createElement(
		// 	'div',
		// 	null,
		// 	React.createElement('h1', null, 'nayyab mehmood')
		// );

		// const name = 'nayyab';
		// const foo = () => {
		// 	return 'nayyab mehmood';
		// };

		// return (
		// 	<Fragment>
		// 		<h1> Hanan Ahmad</h1>
		// 		<button>click {name}</button>
		// 		<p>{foo()}</p>
		// 	</Fragment>
		// );

		return (
			<GithubState>
				<Router>
					<Fragment>
						<Navbar />
						<div className="container">
							<Alert message={this.state.alert} />
							<Switch>
								<Route
									exact
									path="/"
									render={(props) => (
										<div>
											<Search
												// searchUser={this.searchUser}
												// clearUser={this.clearUser}
												// showClear={this.state.users.length > 0 ? true : false}
												setAlert={this.setAlert}
											/>
											<User></User>
										</div>
									)}
								></Route>
								<Route
									exact
									path="/about"
									render={(props) => <About> </About>}
								></Route>
								<Route
									exact
									path="/user/:login"
									render={(props) => (
										<SingleUser
											// getUser={this.getUser}
											{...props}
											// loading={this.state.loading}
											// user={this.state.user}
										></SingleUser>
									)}
								></Route>{' '}
							</Switch>{' '}
						</div>{' '}
					</Fragment>{' '}
				</Router>{' '}
			</GithubState>
		);
	}
}

export default App;
