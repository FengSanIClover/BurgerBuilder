import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuilderControls from "../../components/Burger/BuilderControls/BuilderControls"

/** 全域用得常數命名都為大寫 */
const INGREDIENT_PRICE = {
    salad: 0.5,
    meat: 1.3,
    cheese: 0.4,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4
    }

    /** 新增 配料(salad、meat、cheese、bacon)數量及更新價錢 */
    addIngredientHandler = (type) => {
        /** 取得當前數量並 +1 */
        const updateTypeCount = this.state.ingredients[type] += 1;

        /** 讀取當前配料物件值 */
        const updateIngredient = {
            ...this.state.ingredients
        }

        /** 更新配料值 */
        updateIngredient[type] = updateTypeCount;

        /** 更新現在價錢 */
        const newCurrentPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

        /** 更新狀態 */
        this.setState({
            totalPrice: newCurrentPrice,
            ingredients: updateIngredient
        })
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuilderControls
                    addIngredientHandler={this.addIngredientHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;