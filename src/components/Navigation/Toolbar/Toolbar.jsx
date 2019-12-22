import React from "react";
import classes from "../../../assets/styles/components/toolbar.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle/SideDrawerToggle";

const toolBar = (props) => (
    <header className={classes.Toolbar}>
        <SideDrawerToggle clicked={props.sideDrawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);


export default toolBar;