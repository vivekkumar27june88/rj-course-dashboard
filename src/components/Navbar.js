import React from 'react';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <section className={classes.Navbar}>
            <div className={classes.MainLogoContainer}>
                <img src="/assets/images/MainLogo.svg" />
            </div>
        </section>
    );
};

export default Navbar;
