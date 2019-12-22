import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import classes from "../../../assets/styles/components/ordersummary.module.css";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    // 使用 function component 就可以了，因為不需要使用到生命週期，此次僅為測試觀看用
    componentWillUpdate() {
        console.log(`[OrderSummary] Will Update`)
    }

    componentDidUpdate() {
        console.log(`[OrderSummary] Did Update`)
    }

    render() {
        const ingerdients = Object.keys(this.props.ingredients)
            .map(igkey => {
                return (
                    <li key={igkey}>
                        <span className={classes.TextTransform}>{igkey}</span>:{this.props.ingredients[igkey]}
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
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue To Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseCoutinued}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary;