import React, { useContext } from 'react';
import UserItem from './userItem';
import Spinner from '../layout/Spinner';
// import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const User = () => {
	const githubContext = useContext(GithubContext);
	const { loading, users } = githubContext;
	// state = {
	// 	users: [
	// 		{
	// 			id: '1',
	// 			login: 'mojombo',
	// 			avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
	// 			html_url: 'https://github.com/mojombo',
	// 		},
	// 		{
	// 			id: '2',
	// 			login: 'defunkt',
	// 			avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
	// 			html_url: 'https://github.com/defunkt',
	// 		},
	// 		{
	// 			id: '3',
	// 			login: 'pjhyett',
	// 			avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
	// 			html_url: 'https://github.com/pjhyett',
	// 		},
	// 		{
	// 			id: '4',
	// 			login: 'wycats',
	// 			avatar_url: 'https://avatars0.githubusercontent.com/u/4?v=4',
	// 			html_url: 'https://github.com/wycats',
	// 		},
	// 	],
	// };

	if (loading) {
		return <Spinner />;
	} else {
		return (
			// <div>
			// 	{this.state.users.map((user) => (
			// 		<div key={user.id}>{user.login}</div>
			// 	))}
			// </div>

			// <div className="gridUser">
			// 	{this.state.users.map((user) => (
			// 		<UserItem key={user.id} user={user} />
			// 	))}
			// </div>

			<div className="gridUser">
				{users.map((user) => (
					// <UserItem key={user.id} user={user} />
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};

// User.propTypes = {
// 	users: PropTypes.array.isRequired,
// 	loading: PropTypes.bool.isRequired,
// };

export default User;
