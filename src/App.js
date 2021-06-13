import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { Gnomes } from './Gnomes';
import { Details } from './Details';

const url =
	'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

export const detailsContext = createContext({
	isOpen: false,
	selectedGnome: {},
	setIsOpen: () => {},
	setSelectedGnome: () => {},
});

export const App = (props) => {
	const [gnomes, setGnomes] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedGnome, setSelectedGnome] = useState({});

	useEffect(() => {
		fetch(url)
			.then((data) => data.json())
			.then(({ Brastlewark }) => {
				setGnomes(Brastlewark);
			});
	}, []);

	return (
		<detailsContext.Provider
			value={{ isOpen, setIsOpen, selectedGnome, setSelectedGnome }}
		>
			<div className="App">
				{gnomes.length ? (
					<Gnomes gnomes={gnomes} />
				) : (
					<span>Cargando Gnomos...</span>
				)}

				<Details />
			</div>
		</detailsContext.Provider>
	);
};
