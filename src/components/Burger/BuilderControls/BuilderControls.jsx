import React from "react";
import classes from "../../../assets/styles/components/buildercontrols.module.css";
import BuildControl from "./BuildControl/BuildControl"

const builderControls = (props) => {
    return (
        <div className={classes.BuilderControls}>
            <BuildControl />
        </div>
    );
}

export default builderControls;