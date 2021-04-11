import React from 'react';

export const Gnomes = ({ gnomes }) => {
	return gnomes?.length ? (
		<ul data-testid="gnomes-list">
			{gnomes &&
				gnomes.map((gnome, index) => (
					<li key={`gnome-${index}`}>{gnome.name}</li>
				))}
		</ul>
	) : null;
};
