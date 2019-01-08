/**
 * Created by beilunyang on 2018/8/31
 */
import * as React from "react";
import classNames from 'classnames';
import Animation from "../Animation";
import Indicator from '../Indicator';
import Icon from "../Icon";
import { IToastProps } from "./propsType";
import "./styles/index.less";

const TRANSITION_DURATION = 200;

export default class Toast extends React.Component<IToastProps, any> {
    static defaultProps = {
        prefixCls: "yh-toast",
        duration: 2000,
        animationEnd: () => {},
        onClose: () => {},
        position: "center",
        mask: false,
    };

    ownIcon = false;

    componentDidMount() {
        const {
            type,
            duration,
            animationEnd,
        } = this.props;
        if (duration < 0) {
            console.warn("duration can not less than or equal to 0");
            return;
        }

        if (duration > 0 && type !== "loading") {
            setTimeout(() => {
                this.onClose(animationEnd);
            }, TRANSITION_DURATION + duration);
        }
    }

    onClose = (cb: () => void) => {
        const { prefixCls } = this.props;
        // TODO: toast去除DOM操作
        const toast = document.querySelector(`.${prefixCls}-inner-container`);
        toast.classList.add("yh-zoom-leave", "yh-zoom-leave-active");
        setTimeout(() => {
            this.props.onClose();
            cb();
        }, TRANSITION_DURATION);
    };

    renderIcon = () => {
        const {
            type,
            icon,
            prefixCls,
        } = this.props;

        if (type === "loading") {
            return (
                <div className={`${prefixCls}-icon-container`}>
                    <Indicator
                        size="xl"
                        color="white"
                    />
                </div>
            );
        }

        let iconName = "";
        switch (type) {
            case "success":
                iconName = "unchecked";
                break;
            case "fail":
                iconName = "close-circle-o";
                break;
            case "warn":
                iconName = "alert";
                break;
        }

        if (iconName) {
            this.ownIcon = true;
            return (
                <div className={`${prefixCls}-icon-container`}>
                    <Icon
                        name={iconName}
                        color="#fff"
                        size={32}
                    />
                </div>
            );
        }

        if (React.isValidElement(icon)) {
            this.ownIcon = true;
            return (
                <div className={`${prefixCls}-icon-container`}>{icon}</div>
            );
        }

        if (typeof icon === "function") {
            const elements = icon();
            if (React.isValidElement(elements)) {
               this.ownIcon = true;
               return (
                   <div className={`${prefixCls}-icon-container`}>{elements}</div>
               );
            }
            console.warn("icon must be a function that can render reactElements");
            return null;
        }
        return null;
    };

    renderContent = () => {
        const {
            content,
            prefixCls,
        } = this.props;
        if (typeof content === "string") {
            const cls = classNames(`${prefixCls}-text-container`, `${prefixCls}-content-text`,
                this.ownIcon ? `${prefixCls}-own-icon` : null);
            return (
                <div className={cls}>{content}</div>
            );
        }

        if (React.isValidElement(content)) {
            return (
                <div className={`${prefixCls}-text-container`}>{content}</div>
            );
        }

        return null;
    };

    render() {
        const {
            duration,
            animationEnd,
            mask,
            position,
            className,
            prefixCls,
            ...restProps
        } = this.props;
        let innerCls = null;
        switch (position) {
            case "top":
                innerCls = `${prefixCls}-top`;
                break;
            case "bottom":
                innerCls = `${prefixCls}-bottom`;
                break;
        }
        innerCls = classNames(`${prefixCls}-inner-container`, innerCls, className);
        const cls = classNames(
            `${prefixCls}-container`,
            position === "center" ? `${prefixCls}-center` : null,
            mask ? `${prefixCls}-mask` : null,
        );
        return (
            <div className={cls}>
                <Animation
                    key="toast"
                    transitionName="yh-zoom"
                    component="div"
                    className={`${prefixCls}-animation-div`}
                >
                    <div className={innerCls} {...restProps}>
                        {this.renderIcon()}
                        {this.renderContent()}
                    </div>
                </Animation>
            </div>
        );
    }
}
