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

    /** 新增 配料(salad、meat、cheese、bacon)數量及更新價錢 
     * @param type 配料名稱
     */
    addIngredientHandler = (type) => {
        const updateTypeCount = this.getUpdateCount(type, +1);

        this.updateState(type, updateTypeCount, +1)
    }

    /** 移除 配料(salad、meat、cheese、bacon)數量及更新價錢 
     * @param type 配料名稱
     */
    removeIngredient = (type) => {
        const updateTypeCount = this.getUpdateCount(type, -1);

        if (updateTypeCount < 0) return;

        this.updateState(type, updateTypeCount, -1);
    }

    /** 取得更新後的配料值 取得當前數量並 -1 or +1 
     * @param type 配料名稱
     * @param polarity 正負極性
     */

    getUpdateCount = (type, polarity) => {
        const oldCount = this.state.ingredients[type];
        return oldCount + (1 * polarity);
    }

    /** 更新配料值、價錢、狀態 
     * @param type 配料名稱
     * @param updateTypeCount 要更新的配料值
     * @param polarity 正負極性
     */
    updateState(type, updateTypeCount, polarity) {
        /** 讀取當前配料物件值 */
        const updateIngredient = {
            ...this.state.ingredients
        }

        /** 更新配料值 */
        updateIngredient[type] = updateTypeCount;

        /** 更新現在價錢 */
        const newCurrentPrice = this.state.totalPrice + (INGREDIENT_PRICE[type] * polarity);

        /** 更新狀態 */
        this.setState({
            totalPrice: newCurrentPrice,
            ingredients: updateIngredient
        })
    }

    render() {
        /** 判斷減少各種配料的按鈕是否要 disable */
        const disableInfos = {
            ...this.state.ingredients
        };

        for (let key in disableInfos) {
            disableInfos[key] = disableInfos[key] === 0
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuilderControls
                    addIngredientHandler={this.addIngredientHandler}
                    removeIngredient={this.removeIngredient}
                    disableInfos={disableInfos}
                    // ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;