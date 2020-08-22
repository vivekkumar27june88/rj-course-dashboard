import React from 'react';
import classes from './ContentView.module.css';
import Dashboard from './Dashboard';

const ContentView = (props) => {
    return (
        <div className={classes.ContentView} data-test="contentView">
            <Dashboard />
        </div>
    );
};

export default ContentView;
