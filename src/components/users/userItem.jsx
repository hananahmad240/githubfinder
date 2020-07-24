import React from 'react';
import PropTypes from 'prop-types';
import './User.css';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	// const { login, avatar_url, html_url } = props.user;
	console.log(login);

	return (
		<div>
			<div className="card text-center py-4">
				<img
					src={avatar_url}
					alt=""
					className="img-round"
					style={{ width: '60px' }}
				/>
				<h3>{login}</h3>
				<Link to={`/user/${login}`} className="btn btn-secondary btn-md">
					More
				</Link>
			</div>
		</div>
	);
};
UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

// class UserItem extends Component {
// 	// state = {
// 	// 	id: 'id',
// 	// 	login: 'mojombo',
// 	// 	avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
// 	// 	html_url: 'https://github.com/mojombo',
// 	// };
// 	render() {
// 		// const { login, avatar_url, html_url } = this.state;
// 		const { login, avatar_url, html_url } = this.props.user;
// 		return (
// 			<div>
// 				<div className="card text-center py-4">
// 					<img
// 						src={avatar_url}
// 						alt=""
// 						className="img-round"
// 						style={{ width: '60px' }}
// 					/>
// 					<h3>{login}</h3>
// 					<a href={html_url} className="btn btn-secondary btn-md">
// 						More
// 					</a>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default UserItem;
