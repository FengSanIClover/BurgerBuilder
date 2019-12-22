import React from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "../../assets/styles/components/layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;
