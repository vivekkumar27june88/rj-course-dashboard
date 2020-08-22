import React, { useState, useEffect } from 'react';
import classes from './DashboardMetricCards.module.css';
import DashboardMetricCard from './DashboardMetricCard';
import dashboardAxios from '../api/dashboardAxio';

const DashboardMetricCards = (props) => {
    const [metrices, setMetrices] = useState([]);

    useEffect(() => {
        dashboardAxios.get('/dashboard').then((dashboardSucRes) => {
            console.log(dashboardSucRes);
            setMetrices(dashboardSucRes.data);
        });
    }, []);

    return (
        <div
            className={classes.DashboardMetricCards}
            data-test="DashboardMetricCards"
        >
            {metrices.map((metrice) => {
                let imagePath;
                let bgColor;
                if (metrice.type === 'profiles') {
                    imagePath = '/assets/images/user-icon.svg';
                    bgColor = 'rgba(113, 59, 219, 0.05)';
                } else {
                    imagePath = '/assets/images/graph.svg';
                    bgColor = 'rgba(51, 214, 159, 0.07)';
                }
                return (
                    <DashboardMetricCard
                        key={metrice.id}
                        {...{ imagePath, bgColor, metrice }}
                    />
                );
            })}
        </div>
    );
};

export default DashboardMetricCards;
