import React from 'react';
import classes from "../../../../assets/styles/components/buildcontrol.module.css";

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
                className={classes.Less}
                type="button"
                onClick={props.removeIngredient}
                disabled={props.disableInfo}
            >Less</button>
            <button className={classes.More} type="button" onClick={props.addIngredientHandler}>More</button>
        </div>
    )
}

export default buildControl;