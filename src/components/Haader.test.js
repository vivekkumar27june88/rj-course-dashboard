import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
    let wrapper;
    const props = {};
    beforeEach(() => {
        wrapper = shallow(<Header {...props} />);
    });

    it('should render corretly', () => {
        expect(wrapper.find('nav[data-test="header"]')).toBeTruthy();
    });
});
