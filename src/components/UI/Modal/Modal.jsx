import React, { Component } from "react";
import classes from "../../../assets/styles/components/modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

class Modal extends Component {

    // 因不是畫面上即時顯示的介面，不需要一直重新 Render ，在要顯示時再重新 Render 就好
    shouldComponentUpdate(nextProp, nextState) {
        return nextProp.show !== this.props.show || nextProp.children !== this.props.children
    }

    // componentWillUpdate() {
    //     console.log(`[Modal] will Update`)
    // }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                        opacity: this.props.show ? "1" : "0"
                    }}
                >
                    {
                        this.props.children
                    }
                </div>
            </Aux>
        )
    }
}

export default Modal;