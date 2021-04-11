import React from 'react';
import './App.css';
import { Gnomes } from './Gnomes';

const url =
	'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		fetch(url)
			.then((data) => {
				return data.json();
			})
			.then(({ Brastlewark }) => {
				console.log(Brastlewark);
				this.setState({ gnomes: Brastlewark });
			});
	}

	render() {
		return (
			<div className="App">
				<Gnomes gnomes={this.state.gnomes} />
			</div>
		);
	}
}


