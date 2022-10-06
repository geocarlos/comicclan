import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

describe('MainPage', () => {
	const mp = shallow(<MainPage />);
	it('renders properly', () => {
		expect(mp).toMatchSnapshot();
	});
});
