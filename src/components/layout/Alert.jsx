import React, { Component, Fragment } from 'react';

class Alert extends Component {
	render() {
		return (
			this.props.message !== '' && (
				<Fragment>
					<div
						className="alert alert-warning alert-dismissible fade show"
						role="alert"
					>
						<strong>{this.props.message}</strong>

						<button
							type="button"
							className="close"
							data-dismiss="alert"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				</Fragment>
			)
		);
	}
}

export default Alert;
