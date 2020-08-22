import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Student', () => {
    let wrapper;
    const props = {};
    beforeEach(() => {
        wrapper = shallow(<Navbar {...props} />);
    });

    it('should render corretly', () => {
        expect(wrapper.find('div[data-test="navbar"]')).toBeTruthy();
    });
});
