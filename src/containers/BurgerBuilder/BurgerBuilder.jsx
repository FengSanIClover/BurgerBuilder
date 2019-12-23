import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuilderControls from "../../components/Burger/BuilderControls/BuilderControls"
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios.order";

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    /** 更新是否可以購買的狀態 
     * @param updateIngredient 更新狀態的值
    */
    updatePurchasable = (updateIngredient) => {
        // const ingredients = {
        //     ...this.state.ingredients
        // }

        const sum = Object.keys(updateIngredient)
            .map(igkey => {
                return updateIngredient[igkey]
            })
            .reduce((sum, current) => {
                return sum + current;
            }, 0)

        this.setState({ purchasable: sum > 1 })

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

        /** 更新是否可以購買 */
        this.updatePurchasable(updateIngredient);
    }

    /** 更新狀態為購買中 */
    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    /** 取消購買中的狀態 */
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    /** 確認配料細項 */
    purchaseContinueHandler = () => {
        // alert("Cotinue~");
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: new Date().toDateString(),
                address: {
                    country: "Taiwan",
                    street: "Ruiguan Rd",
                    zipCode: "114"
                },
                email: "123@123.com.tw"
            },
            deliveryMethod: "fastest"
        }

        // 使用 firebase 新增資料庫，網址後要加 .json ，否則會出現 CORS 錯誤
        axios.post("/orders.json", order)
            .then(response => console.log(response))
            .catch(error => console.log(error))
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
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice.toFixed(2)}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseCoutinued={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuilderControls
                    addIngredientHandler={this.addIngredientHandler}
                    removeIngredient={this.removeIngredient}
                    disableInfos={disableInfos}
                    // ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    order={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;