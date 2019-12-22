import React from "react";
import classes from "../../../../assets/styles/components/sidedrawertoggle.module.css";

const sideDrawerToggle = (props) => (
    <div
        className={classes.DrawerToggle}
        onClick={props.clicked} >
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sideDrawerToggle;