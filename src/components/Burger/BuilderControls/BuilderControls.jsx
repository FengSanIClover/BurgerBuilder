import React from "react";
import classes from "../../../assets/styles/components/buildercontrols.module.css";
import BuildControl from "./BuildControl/BuildControl"

const builderControls = (props) => {

    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Meat', type: 'meat' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Bacon', type: 'bacon' }
    ]

    const builderControls = controls.map(ctr => {
        return (
            <BuildControl
                key={ctr.label}
                label={ctr.label}
                addIngredientHandler={() => props.addIngredientHandler(ctr.type)}
                removeIngredient={() => props.removeIngredient(ctr.type)}
                disableInfo={props.disableInfos[ctr.type]}
            // disableInfo={!props.ingredients[ctr.type]}
            />
        )
    })

    return (
        <div className={classes.BuilderControls}>
            <p>單錢價格:<strong>{props.price.toFixed(2)}</strong> </p>
            {
                builderControls
            }
            <button
                type="button"
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.order}
            >ORDER NOW</button>
        </div>
    );
}

export default builderControls;