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
	const { queryByTestId } = render(<Card data={data} />);
	expect(queryByTestId('image-placeholder')).toBeInTheDocument();
});

test('WHEN friends is not defined, THEN need to display a default message', () => {
	const data = { name: 'Gnome name' };
	const { queryByTestId, debug } = render(<Card data={data} />);
	expect(queryByTestId('card-friends').innerHTML).toBe('No data');
});

test('WHEN friends list is empty, THEN need to display a default message', () => {
	const data = { name: 'Gnome name', friends: [] };
	const { queryByTestId } = render(<Card data={data} />);
	expect(queryByTestId('card-friends').innerHTML).toBe('No friends');
});

test('WHEN friends is not empty, THEN need to display the number of friends', () => {
	const data = { name: 'Gnome name', friends: ['lola', 'manu'] };
	const { queryByTestId } = render(<Card data={data} />);
	expect(queryByTestId('card-friends').innerHTML).toBe(
		data.friends.length.toString()
	);
});

test('WHEN professions is not defined, THEN need to display a default message', () => {
	const data = { name: 'Gnome name' };
	const { queryByTestId } = render(<Card data={data} />);
	expect(queryByTestId('card-professions').innerHTML).toBe('No data');
});

test('WHEN professions list is empty, THEN need to display a default message', () => {
	const data = {
		name: 'Gnome name',
		professions: [],
	};
	const { queryByTestId } = render(<Card data={data} />);
	expect(queryByTestId('card-professions').innerHTML).toBe('No professions');
});

test('WHEN professions list is not empty, THEN need to display the number of professions', () => {
	const data = {
		name: 'Gnome name',
		professions: ['desarrollador', 'carpintero'],
	};
	const { queryByTestId } = render(<Card data={data} />);
	expect(queryByTestId('card-professions').innerHTML).toBe(
		data.professions.length.toString()
	);
});
