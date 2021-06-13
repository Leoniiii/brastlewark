import React, { useContext } from 'react';
import { Details } from './Details';

import { makeStyles } from '@material-ui/core/styles';
import { Card as MUICard } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { detailsContext } from './App';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
});

export const Card = ({ data, onMoreDetails }) => {
	const { name, friends, thumbnail, professions, age } = data;
	const classes = useStyles();
	const { setIsOpen, setSelectedGnome } = useContext(detailsContext);

	if (name) {
		return (
			<>
				<MUICard data-testid="card" className={classes.root}>
					<CardActionArea>
						<CardMedia
							component="img"
							alt={name}
							height="140"
							image={thumbnail}
							title={name}
						></CardMedia>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{name}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								age: {age || ''}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Friends: {friends ? friends.length || 'No friends' : 'No data'}
							</Typography>
						</CardContent>
					</CardActionArea>
					{/* <div data-testid="card-image">
						{thumbnail ? (
							<img data-testid="card-thumbnail" src={thumbnail} />
						) : (
							<img data-testid="image-placeholder" />
						)}
					</div> */}
					{/* <h2 data-testid="card-name">{name}</h2>
					age:<p data-testid="card-age">{age || ''}</p>
					Friends:
					<p data-testid="card-friends">
						{friends ? friends.length || 'No friends' : 'No data'}
					</p>
					Professions:
					<p data-testid="card-professions">
						{professions ? professions.length || 'No professions' : 'No data'}
					</p> */}
					<CardActions>
						<Button
							onClick={() => {
								setIsOpen(true);
								setSelectedGnome(data);
							}}
							variant="contained"
							color="primary"
						>
							See Detail
						</Button>
					</CardActions>
				</MUICard>
			</>
		);
	}
	return null;
};
