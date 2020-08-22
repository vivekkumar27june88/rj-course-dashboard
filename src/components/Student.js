import React from 'react';
import classes from './Student.module.css';
import Icon from './Icon';

const Student = (props) => {
    const { name, marks, id } = props.student;

    return (
        <div className={classes.Student} data-test="student">
            <Icon imagePath={`/assets/images/${id % 12}.png`} />
            <div className={classes.StudentName}>{name}</div>
            <div className={classes.Marks}>{marks}</div>
        </div>
    );
};

export default Student;
