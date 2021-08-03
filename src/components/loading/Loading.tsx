import * as React from "react";
import Animation from "../Animation";
import { IToastProps } from "./propsType";
import "./styles/index.less";
import lottie from 'lottie-web'
import dataJson from "./data"
const TRANSITION_DURATION = 200;
import './index.less'


export default class Toast extends React.Component<IToastProps, any> {
    static defaultProps = {
        prefixCls: "yh-toast",
        onClose: () => {},
    };

    ownIcon = false;
    animation: any = null
    loadingAnimation: any = React.createRef()
    componentDidMount() {
        this.animation = lottie.loadAnimation({
            container: this.loadingAnimation.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData:dataJson,
        })  
    }

    onClose = (cb: () => void) => {
        const { prefixCls } = this.props;
        // TODO: toast去除DOM操作
        const loading = document.querySelector(`.${prefixCls}-inner-container`);
        loading.classList.add("yh-zoom-leave", "yh-zoom-leave-active");
        setTimeout(() => {
            this.props.onClose();
            cb();
        }, TRANSITION_DURATION);
    }; 
    render() {
        const {
            prefixCls,
        } = this.props;
        return (
            <div className = "cls">
                <div className="loading-mask">
                <Animation
                    key="toast"
                    transitionName="yh-zoom"
                    component="div"
                    className={`${prefixCls}-animation-div`}
                >
                    <div className="loading-wrapper" ref={this.loadingAnimation}>
                    </div>    
                </Animation>
                </div>
            </div>
        );
    }
}
