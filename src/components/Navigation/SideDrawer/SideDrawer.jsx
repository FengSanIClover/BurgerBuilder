import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "../../../assets/styles/components/sidedrawer.module.css";

const sideDrawer = (props) => {
    // do something
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default sideDrawer;