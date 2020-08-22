import React from 'react';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <section className={classes.Navbar} data-test="navbar">
            <div className={classes.MainLogoContainer}>
                <img
                    src="/assets/images/MainLogo.svg"
                    alt="Application main logo"
                />
            </div>
        </section>
    );
};

export default Navbar;
