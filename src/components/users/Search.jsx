import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {
	// initialize context
	const githubContext = useContext(GithubContext);
	const [text, setText] = useState('');

	const onChange = (e) => {
		// this.setState({ text: e.target.value });
		// this.setState({ [e.target.name]: e.target.value });
		setText(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state.text);
		if (text === '') {
			setAlert('Please enter Something');
		} else {
			// this.props.searchUser(this.state.text);
			githubContext.searchUser(text);
			// this.setState({ text: '' });
			setText('');
		}
	};

	return (
		<div className="my-3">
			<form className="form" onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="search">Seach User</label>
					<input
						type="text"
						name="text"
						className="form-control"
						placeholder="Search User"
						value={text}
						onChange={onChange}
					/>
				</div>
				<input
					type="submit"
					value="Search"
					className="btn btn-dark btn-block"
				/>
			</form>

			{githubContext.users.length > 0 && (
				<input
					type="button"
					value="Clear"
					className="btn btn-secondary btn-block mt-2"
					onClick={githubContext.clearUser}
				/>
			)}
		</div>
	);
};

Search.propTypes = {
	// searchUser: PropTypes.func.isRequired,
	// clearUser: PropTypes.func.isRequired,
	// showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired,
};
export default Search;
