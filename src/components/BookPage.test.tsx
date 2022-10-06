import React from 'react';
import BookPage from './BookPage';
import { shallow } from 'enzyme';

describe('App', () => {
	const bp = shallow(<BookPage />);
	it('renders properly', () => {
		expect(bp).toMatchSnapshot();
	});
});
