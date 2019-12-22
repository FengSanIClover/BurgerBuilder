import React from "react";
import burgerLogo from "../../../assets/images/burger-logo.png"; /** 告訴 webpack 有使用到圖檔，避免佈板未使用 */
import classes from "../../../assets/styles/components/logo.module.css";

const logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;