import React from 'react';
import classes from './Icon.module.css';

const Icon = (props) => {
    return (
        <div
            className={classes.Icon}
            style={{
                width: `${props.width}px` || '40 px',
                height: `${props.height}px` || '40 px',
                background: props.imagePath
                    ? `url(${props.imagePath})`
                    : props.bgc
                    ? props.bgc
                    : 'transparent',
                border: props.imagePath
                    ? 'none'
                    : '1px solid var(--rcd-icon-border-col)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: props.bgSize ? props.bgSize : 'contain',
                backgroundColor: props.bgColor ? props.bgColor : 'transparent',
            }}
        ></div>
    );
};

export default Icon;
