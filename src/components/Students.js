import React, { useState, useEffect } from 'react';
import classes from './Students.module.css';
import dashboardAxios from '../api/dashboardAxio';
import Student from './Student';
import { SortDirEnum } from '../modals/SortDirModal';

const Students = (props) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        dashboardAxios.get('/students').then((studentsSucRes) => {
            setStudents(studentsSucRes.data);
            console.log(studentsSucRes);
        });
    }, []);

    useEffect(() => {
        const sortedStudents = students.sort((a, b) => {
            if (props.sortDir === SortDirEnum.ASC) {
                return a.marks - b.marks;
            } else {
                return b.marks - a.marks;
            }
        });
        setStudents(sortedStudents);
    }, [props.sortDir]);

    return (
        <div className={classes.Students}>
            {students.map((student) => (
                <Student student={student} key={student.id} />
            ))}
        </div>
    );
};

export default Students;
