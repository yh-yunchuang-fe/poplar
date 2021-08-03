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
