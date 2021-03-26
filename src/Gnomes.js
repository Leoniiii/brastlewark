import React from 'react';

export class Gnomes extends React.Component {
	render() {
		const { gnomes } = this.props;

		return gnomes?.length ? (
			<ul data-testid="gnomes-list">
				{gnomes &&
					gnomes.map((gnome, index) => (
						<li key={`gnome-${index}`}>{gnome.name}</li>
					))}
			</ul>
		) : null;
	}
}
