import React, { useEffect, useState } from 'react';
import './App.css';
import { Gnomes } from './Gnomes';

const url =
	'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

export const App = (props) => {
	const [gnomes, setGnomes] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((data) => data.json())
			.then(({ Brastlewark }) => {
				setGnomes(Brastlewark);
			});
	}, []);

	return (
		<div className="App">
			{gnomes.length ? (
				<Gnomes gnomes={gnomes} />
			) : (
				<span>Cargando Gnomos...</span>
			)}
		</div>
	);
};
