import React from 'react';
import classes from './Header.module.css';
import Icon from './Icon';

const Header = (props) => {
    const userName = 'Cody Simmons';
    const role = 'Lecturer';

    return (
        <nav className={classes.Header}>
            <div className={classes.ProfileContainer}>
                <div className={classes.TextsContainer}>
                    <div className={classes.UserName}>{userName}</div>
                    <div className={classes.Role}>{role}</div>
                </div>
                <Icon className={classes.Icon} />
                <svg
                className={classes.More}
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
        </nav>
    );
};

export default Header;
