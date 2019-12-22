import React from "react";
import Aux from "../../../hoc/Auxiliary";
import classes from "../../../assets/styles/components/ordersummary.module.css";

const orderSummary = (props) => {
    const ingerdients = Object.keys(props.ingredients)
        .map(igkey => {
            return (
                <li key={igkey}>
                    <span className={classes.TextTransform}>{igkey}</span>:{props.ingredients[igkey]}
                </li>
            )
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {
                    ingerdients
                }
            </ul>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Aux>
    )
}

export default orderSummary;