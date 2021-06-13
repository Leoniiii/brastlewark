import React, { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';
import { detailsContext } from './App';

export const Details = () => {
	const { setIsOpen, isOpen, selectedGnome } = useContext(detailsContext);
	const { name, friends, thumbnail, professions, age } = selectedGnome;

	return (
		<Dialog open={isOpen}>
			<DialogTitle>{name}</DialogTitle>
			<Button
				onClick={() => setIsOpen(false)}
				variant="contained"
				color="primary"
			>
				Close
			</Button>
		</Dialog>
	);
};
