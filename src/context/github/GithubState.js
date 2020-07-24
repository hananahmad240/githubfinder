import React, {
	useReducer
} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
	SEARCH_USER,
	SET_LOADING,
	CLEAR_USER,
	GET_USER,
	SET_ALERT,
} from '../types';

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	// search users
	const searchUser = async (text) => {
		setLoading();

		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
		);
		// console.log(res.data.items);

		dispatch({
			type: SEARCH_USER,
			payload: res.data.items,
		});
	};
	// get user
	const getUser = async (userName) => {
		setLoading();

		const res = await axios.get(`https://api.github.com/users/${userName}`);
		console.log(res.data);

		dispatch({
			type: GET_USER,
			payload: res.data
		})
	};
	// clear user
	const clearUser = () => dispatch({
		type: CLEAR_USER
	});
	// set loading
	const setLoading = () => dispatch({
		type: SET_LOADING,
	});

	return ( <
		GithubContext.Provider value = {
			{
				users: state.users,
				user: state.user,
				loading: state.loading,
				searchUser,
				clearUser,
				getUser
			}
		} > {
			props.children
		} <
		/GithubContext.Provider>
	);
};

export default GithubState;