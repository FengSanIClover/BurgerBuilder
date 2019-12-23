import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
    // return (props) => {
    return class extends Component {
        state = {
            error: null
        }

        /** 也可以寫在 Constructor */
        // constructor() {
        //     super()
        //     axios.interceptors.request.use(request => {
        //         this.setState({ error: null })
        //         return request;
        //     })

        //     axios.interceptors.response.use(response => response, error => {
        //         this.setState({ error: error })
        //     })
        // }

        /** 在 component render 後會執行此方法，如果 render 失敗就不會執行 */
        // componentDidMount() {
        //     axios.interceptors.request.use(request => {
        //         this.setState({ error: null })
        //         return request;
        //     })

        //     axios.interceptors.response.use(response => response, error => {
        //         this.setState({ error: error })
        //     })
        // }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({ error: null })
                return request;
            })

            this.resInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({ error: error })
            })
        }

        /** 釋放掉建立的 axios 個體，避免造成 memory leak ， 如果多個 container 都使用此 hoc ，
         * 當 container 結束後會遺留多個未使用的 axios
         */
        componentWillUnmount() {
            console.log("[WrappedComponent] will unmount", this.reqInterceptor, this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorCloseHandler = () => {
            this.setState({ error: null })
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorCloseHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}

export default withErrorHandler;