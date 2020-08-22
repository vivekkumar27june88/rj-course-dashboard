import React from 'react';
import classes from './DashboardMetricCard.module.css';
import Icon from './Icon';

const DashboardMetricCard = (props) => {
    const { title, line1, line2 } = props.metrice;
    return (
        <div className={classes.DashboardMetricCard}>
            <Icon
                width="70"
                height="70"
                imagePath={props.imagePath}
                bgSize="18px 18px"
                bgColor={props.bgColor}
            />
            <div className={classes.TextContainer}>
                <div className={classes.Line1}>
                    <h3>{line1}</h3>
                    <span>{line2}</span>
                </div>
                <p className={classes.Line2}>{title}</p>
            </div>
        </div>
    );
};

export default DashboardMetricCard;
