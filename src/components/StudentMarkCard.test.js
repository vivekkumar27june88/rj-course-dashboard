import React from 'react';
import { shallow } from 'enzyme';
import StudentMarkCard from './StudentMarkCard';

describe('StudentMarkCard', () => {
    let wrapper;
    const props = {};
    beforeEach(() => {
        wrapper = shallow(<StudentMarkCard {...props} />);
    });

    it('should render corretly', () => {
        expect(wrapper.find('div[data-test="studentMarkCard"]')).toBeTruthy();
    });
});
