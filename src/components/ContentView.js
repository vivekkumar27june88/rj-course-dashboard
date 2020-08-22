import React from 'react';
import classes from './ContentView.module.css';
import Dashboard from './Dashboard';

const ContentView = (props) => {
    return (
        <div className={classes.ContentView}>
            <Dashboard />
        </div>
    );
};

export default ContentView;
