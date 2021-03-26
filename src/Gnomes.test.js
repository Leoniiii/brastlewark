import { render, screen } from '@testing-library/react';
import { Gnomes } from './Gnomes';

const gnomes = [{ name: 'gnome 1' }, { name: 'gnome 2' }];

test('when gnomes list is undefined list is not rendered ', () => {
	const { queryByTestId } = render(<Gnomes />);
	expect(queryByTestId('gnomes-list')).not.toBeInTheDocument();
});

test('when gnomes list is empty list is not rendered ', () => {
	const { queryByTestId } = render(<Gnomes />);
	expect(queryByTestId('gnomes-list')).not.toBeInTheDocument();
});

test('it renders exactly all gnomes on list', () => {
	const { getByTestId } = render(<Gnomes gnomes={gnomes} />);
	expect(getByTestId('gnomes-list').children).toHaveLength(gnomes.length);
});

test('it renders gnomes on list', () => {
	const { queryByText } = render(<Gnomes gnomes={gnomes} />);
	expect(queryByText('gnome 1')).toBeInTheDocument();
	expect(queryByText('gnome 2')).toBeInTheDocument();
});
