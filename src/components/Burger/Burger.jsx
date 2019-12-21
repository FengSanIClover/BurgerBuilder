import React from "react";
import classes from "../../assets/styles/components/burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients) // ex. ['meat','cheese','bacon','salad']
        .map((igKey) => {
            // 將 ingredients 的物件屬性名取出變成陣列
            return [...Array(props.ingredients[igKey])]  //  array length ex. [1] [0] [2] [1]
                .map((_, index) => {
                    // 透過物件屬性名 將值轉為陣列長度
                    // 僅取得個原料的陣列長度，產生元素，不在乎值，因此用 _ 顯示
                    return <BurgerIngredient key={igKey + index} type={igKey} />
                })
        })

    // console.log(props.ingredients)

    // console.log(transformedIngredients)


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {
                transformedIngredients
            }
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;