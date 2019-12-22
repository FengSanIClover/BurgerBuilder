import React from "react";
import classes from "../../../assets/styles/components/toolbar.module.css";
import Logo from "../Logo/Logo";

const toolBar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ....
        </nav>
    </header>
);


export default toolBar;