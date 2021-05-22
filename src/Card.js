import React from 'react';
import Button from '@material-ui/core/Button';
import { Details } from './Details';

export const Card = ({ data, onMoreDetails }) => {
	const { name, friends, thumbnail, professions, age } = data;

	if (name) {
		return (
			<>
				<div data-testid="card" className="card">
					<div data-testid="card-image">
						{thumbnail ? (
							<img data-testid="card-thumbnail" src={thumbnail} />
						) : (
							<img data-testid="image-placeholder" />
						)}
					</div>
					<h2 data-testid="card-name">{name}</h2>
					age:<p data-testid="card-age">{age || ''}</p>
					Friends:
					<p data-testid="card-friends">
						{friends ? friends.length || 'No friends' : 'No data'}
					</p>
					Professions:
					<p data-testid="card-professions">
						{professions ? professions.length || 'No professions' : 'No data'}
					</p>
					<Button onClick={onMoreDetails} variant="contained" color="primary">
						See Detail
					</Button>
				</div>
			</>
		);
	}
	return null;
};
