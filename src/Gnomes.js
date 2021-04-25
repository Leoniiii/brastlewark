import React from 'react';
import { Card } from './Card';
export const Gnomes = ({ gnomes }) => {
	return gnomes?.length ? (
		<div data-testid="gnomes-list" className="gnomes-container">
			{gnomes &&
				gnomes.map((gnome, index) => (
					<Card data={gnome} key={`gnome-${index}`} />
				))}
		</div>
	) : null;
};
