import React, { useState } from 'react';
import { Card } from './Card';
import { Details } from './Details';

export const Gnomes = ({ gnomes }) => {
	const [isOpen, setIsOpen] = useState(false);

	return gnomes?.length ? (
		<>
			<div data-testid="gnomes-list" className="gnomes-container">
				{gnomes &&
					gnomes.map((gnome, index) => (
						<Card
							data={gnome}
							key={`gnome-${index}`}
							onMoreDetails={() => {
								setIsOpen(true);
							}}
						/>
					))}
			</div>
			<Details open={isOpen} onCloseDialog={() => setIsOpen(false)} />
		</>
	) : null;
};
