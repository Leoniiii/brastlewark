import React, { useState } from 'react';
import { Card } from './Card';
import { Details } from './Details';

export const Gnomes = ({ gnomes }) => {
	return gnomes?.length ? (
		<>
			<div
				style={{
					gridGap: 10,
					marginTop: 10,
				}}
				data-testid="gnomes-list"
				className="gnomes-container"
			>
				{gnomes &&
					gnomes.map((gnome, index) => (
						<Card className="" data={gnome} key={`gnome-${index}`} />
					))}
			</div>
		</>
	) : null;
};
