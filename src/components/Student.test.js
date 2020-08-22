import React from 'react';
import { shallow } from 'enzyme';
import Student from './Student';

describe('Student', () => {
    let wrapper;
    const props = { student: { name: 'Vivek Kumar', marks: 10.0, id: 1 } };
    beforeEach(() => {
        wrapper = shallow(<Student {...props} />);
    });

    it('should render corretly', () => {
        expect(wrapper.find('div[data-test="student"]')).toBeTruthy();
    });

    it('should show student name', () => {
        const children = wrapper.find('div[data-test="student"]');
        const name = children.childAt(1);
        const text = name.text();
        expect(text).toContain(props.student.name);
    });

    it('should show student marks', () => {
        const children = wrapper.find('div[data-test="student"]');
        const marks = children.childAt(2);
        const text = marks.text();
        expect(text).toContain(props.student.marks);
    });
});
