import React from 'react';
import { shallow } from 'enzyme';
import ContentView from './ContentView';

describe('ContentView', () => {
    let wrapper;
    const props = {};
    beforeEach(() => {
        wrapper = shallow(<ContentView {...props} />);
    });

    it('should render corretly', () => {
        expect(wrapper.find('div[data-test="contentView"]')).toBeTruthy();
    });
});
