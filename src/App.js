import React, { useEffect, useState } from 'react';
import './App.css';
import { Gnomes } from './Gnomes';

const url =
	'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

export const App = () => {
	const [gnomes, setGnomes] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		fetch(url)
			.then((data) => data.json())
			.then(({ Brastlewark }) => {
				console.log(Brastlewark);
				setGnomes(Brastlewark);
			});
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setLoaded(gnomes.length !== 0);
		}, 5000);
	}, [gnomes]);

	return (
		<div className="App">
			{loaded ? <Gnomes gnomes={gnomes} /> : <span>Cargando Gnomos...</span>}
		</div>
	);
};
