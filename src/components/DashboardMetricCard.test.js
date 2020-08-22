import React from 'react';
import { shallow } from 'enzyme';
import DashboardMetricCards from './DashboardMetricCards';

describe('DashboardMetricCards', () => {
    let wrapper;
    const props = {};
    beforeEach(() => {
        wrapper = shallow(<DashboardMetricCards {...props} />);
    });

    it('should render corretly', () => {
        expect(
            wrapper.find('div[data-test="DashboardMetricCards"]')
        ).toBeTruthy();
    });
});
