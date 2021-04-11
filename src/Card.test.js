import { render, screen } from '@testing-library/react';
import { Card } from './Card';

test('when a Card component is used and data prop is empty THEN the card is not renderd', () => {
	const { queryByTestId } = render(<Card data={{}} />);
	expect(queryByTestId('card')).not.toBeInTheDocument();
});

test('when a Card component is used and data with a name is provided THEN the card is renderd', () => {
	const { queryByTestId } = render(<Card data={{ name: 'Gnome name' }} />);
	expect(queryByTestId('card')).toBeInTheDocument();
});

test('when a Card component is used and data prop is not empty THEN the card is  renderd with all its elements', () => {
	const { queryByTestId } = render(<Card data={{ name: 'Gnome name' }} />);
	expect(queryByTestId('card-image')).toBeInTheDocument();
	expect(queryByTestId('card-name')).toBeInTheDocument();
	expect(queryByTestId('card-age')).toBeInTheDocument();
	expect(queryByTestId('card-friends')).toBeInTheDocument();
	expect(queryByTestId('card-professions')).toBeInTheDocument();
});

test('when a Card component is used and data prop is not empty THEN the card renders data provided', () => {
	const data = { name: 'Gnome name', age: 309 };
	const { queryByTestId } = render(<Card data={data} />);
	expect(queryByTestId('card-name').innerHTML).toBe(data.name);
	expect(queryByTestId('card-age').innerHTML).toBe(`${data.age}`);
});

test('WHEN data does not includes an image, THEN show an default image', () => {
	const data = { name: 'Gnome name', age: 1000 };
	const { queryByTestId, debug } = render(<Card data={data} />);
	expect(queryByTestId('image-placeholder')).toBeInTheDocument();
});
