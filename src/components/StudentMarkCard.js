import React, { useState } from 'react';
import classes from './StudentMarkCard.module.css';
import Students from './Students';
import { SortDirEnum } from '../modals/SortDirModal';

const StudentMarkCard = (props) => {
    const [sortDir, setSortDir] = useState(SortDirEnum.ASC);

    const changeSortDirClickHandler = () => {
        const newSortDir =
            sortDir === SortDirEnum.ASC ? SortDirEnum.DSC : SortDirEnum.ASC;
        setSortDir(newSortDir);
    };

    return (
        <div className={classes.StudentMarkCard}>
            <div className={classes.Heading}>
                <div className={classes.headingTitle}>
                    Students by avarage mark
                </div>
                <div className={classes.SortContainer}>
                    <div className={classes.SortLabel}>
                        {sortDir === SortDirEnum.ASC
                            ? 'Ascending'
                            : 'Descending'}
                    </div>
                    <svg
                        style={{
                            transform: `rotate(
                            ${sortDir === SortDirEnum.ASC ? '0deg' : '180deg'}
                        )`,
                        }}
                        onClick={changeSortDirClickHandler}
                        className={classes.SortIcon}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 9L12 15L18 9"
                            stroke="#C9CED6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div className={classes.Divider}></div>
            <div className={classes.Students}>
                <Students sortDir={sortDir} />
            </div>
        </div>
    );
};

export default StudentMarkCard;
