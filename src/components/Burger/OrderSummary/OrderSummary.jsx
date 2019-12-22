import React from "react";
import Aux from "../../../hoc/Auxiliary";
import classes from "../../../assets/styles/components/ordersummary.module.css";
import Button from "../../UI/Button/Button";

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
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue To Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseCoutinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;