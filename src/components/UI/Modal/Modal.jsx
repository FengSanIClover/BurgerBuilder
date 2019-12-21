import React from 'react';
import classes from "../../../assets/styles/components/modal.module.css";

const modal = (props) => {
    return (
        <div className={classes.Modal}>
            {
                props.children
            }
        </div>
    )
}

export default modal;