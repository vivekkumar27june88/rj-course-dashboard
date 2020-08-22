import React from 'react';
import classes from './Dashboard.module.css';
import DashboardMetricCards from './DashboardMetricCards';
import StudentMarkCard from './StudentMarkCard';

const Dashboard = (props) => {
    return (
        <section className={classes.Dashboard}>
            <div className={classes.HeadingRow1}>
                <h1>Dashboard</h1>
                <p>Mobile UX/UI Design Course</p>
            </div>
            <div className={classes.Row2}>
                <DashboardMetricCards />
            </div>
            <div className={classes.Row3}>
                <StudentMarkCard />
            </div>
        </section>
    );
};

export default Dashboard;
