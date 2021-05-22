import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';

export const Details = (props) => {
	return (
		<Dialog open={props.open}>
			<DialogTitle></DialogTitle>
			<Button onClick={props.onCloseDialog} variant="contained" color="primary">
				Close
			</Button>
		</Dialog>
	);
};
