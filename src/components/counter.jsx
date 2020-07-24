import React, { Component } from 'react';

// class Counter extends Component {
// 	state = {};
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hanan Ahmad</h1>
// 				<button>Click me</button>
// 			</div>
// 		);
// 	}
// }

// IF WE NOT USED DIV
class Counter extends Component {
	// decalre variable

	state = {
		count: 0,
		name: 'Hanan Ahmad',
		// imageURL: './logo192.png',
	};
	styles = {
		fontSize: 30,
		fontWeight: 'bold',
	};

	render() {
		return (
			<React.Fragment>
				<h1 className="display-4 text-center">{this.state.name}</h1>
				<span> {this.state.count}</span>
				<button className="btn btn-primary">Click me</button>
				<img src={this.state.imageURL} alt="" />
				<p style={this.styles}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
					impedit.
				</p>
			</React.Fragment>
		);
	}
}
export default Counter;
