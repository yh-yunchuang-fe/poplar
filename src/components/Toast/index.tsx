/**
 * Created by beilunyang on 2018/8/31
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import Toast from "./Toast";
import {
    ShowContent,
    IShowToastOptions,
} from "./propsType";

const TRANSITION_DURATION = 300;

const show = (content: ShowContent, options: IShowToastOptions = {}) => {
    const {
        mask,
        icon,
        type,
        duration,
        position,
        onClose,
        style,
    } = options;
    const div = document.createElement("div");
    document.getElementById("modal-root").appendChild(div);
    const animationEnd = () => {
        ReactDOM.unmountComponentAtNode(div);
    };
    ReactDOM.render(
        <Toast
            mask={mask}
            icon={icon}
            type={type}
            style={style}
            content={content}
            duration={duration}
            position={position}
            onClose={onClose}
            animationEnd={animationEnd}
        />
    , div);
    return div;
};

export default {
    LONG: 3500,
    SHORT: 2000,
    success(content: ShowContent, options: IShowToastOptions = {}) {
        const {
            duration,
            position,
            onClose,
            style,
            mask,
        } = options;
        return show(content, {
            type: "success",
            duration,
            position,
            onClose,
            style,
            mask,
        });
    },
    fail(content: ShowContent, options: IShowToastOptions = {}) {
        const {
            duration,
            position,
            onClose,
            style,
            mask,
        } = options;
        return show(content, {
            type: "fail",
            duration,
            position,
            onClose,
            style,
            mask,
        });
    },
    warn(content: ShowContent, options: IShowToastOptions = {}) {
        const {
            duration,
            position,
            onClose,
            style,
            mask,
        } = options;
        return show(content, {
            type: "warn",
            duration,
            position,
            onClose,
            style,
            mask,
        });
    },
    loading(content: ShowContent, options: IShowToastOptions = {}) {
        const {
            duration,
            position,
            onClose,
            style,
            mask,
        } = options;
        return show(content, {
            type: "loading",
            duration,
            position,
            onClose,
            style,
            mask,
        });
    },
    hide(div: any) {
        // TODO: toast去除DOM操作
        const toast = div.querySelector(".yh-toast-inner-container");
        // toast.classList.add("yh-zoom-leave", "yh-zoom-leave-active");
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(div);
        }, TRANSITION_DURATION);
    },
    show,
};
