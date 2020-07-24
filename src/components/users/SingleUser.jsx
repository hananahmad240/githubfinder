import React, { Fragment, useContext, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './User.css';
import GithubContext from '../../context/github/githubContext';

const SingleUser = ({ match }) => {
	// componentDidMount() {
	// 	// console.log(this.props.match.params.login);
	// 	this.props.getUser(this.props.match.params.login);
	// }

	const githubContext = useContext(GithubContext);
	const { getUser, loading, user } = githubContext;
	useEffect(() => {
		getUser(match.params.login);
		// eslint-disable-next-line
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		login,
		html_url,
		hireable,
		company,
	} = user;

	if (loading) return <Spinner></Spinner>;

	return (
		<Fragment>
			<Link to="/" className="btn btn-primary btn-sm">
				<i className="fa fa-backward" aria-hidden="true"></i>
				Back To Search
			</Link>
			Hireable:{''}
			{hireable ? (
				<i className="fas fa-check"></i>
			) : (
				<i className="fas fa-times-circle"></i>
			)}
			<div className="row text-center">
				<div className="col-md-4 my-5 mx-5 text-center">
					<img src={avatar_url} alt="" className="user-image" />
					<h3 className="my-2">{name}</h3>
					<h5 className="my-2">Location :{location}</h5>
				</div>
				<div className="col-md-8 my-5 mx-5 text-left">
					<h3>BIO</h3>
					<p className="lead">{bio}</p>
					<a href={html_url} className="btn btn-danger btn-md">
						Visit Me
					</a>
					<h4>UserName: {login}</h4>
					<h4>Company: {company}</h4>
					<h4>Website</h4>
				</div>
			</div>
		</Fragment>
	);
};

SingleUser.propTypes = {
	// loading: PropTypes.bool.isRequired,
	// user: PropTypes.object.isRequired,
	// getUser: PropTypes.func.isRequired,
	// match: PropTypes.string.isRequired,
};

export default SingleUser;
