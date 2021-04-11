import React from 'react';

export const Card = ({ data }) => {
	if (data?.name) {
		return (
			<div data-testid="card" className="card">
				<div data-testid="card-image">
					{data.thumbnail ? (
						<img data-testid="card-thumbnail" src={data.thumbnail} />
					) : (
						<img data-testid="image-placeholder" />
					)}
				</div>
				<h2 data-testid="card-name">{data?.name}</h2>
				<p data-testid="card-age">{data?.age || ''}</p>
				<p data-testid="card-friends"></p>
				<p data-testid="card-professions"></p>
			</div>
		);
	}
	return null;
};
