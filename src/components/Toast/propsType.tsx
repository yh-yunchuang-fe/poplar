/*
 * @Author: beilunyang
 * @Date: 2018-12-29 17:56:10
 * @Last Modified by: beilunyang
 * @Last Modified time: 2019-01-02 11:27:13
 */
import * as React from "react";

export interface IToastProps extends IShowToastOptions {
    prefixCls?: string;
    animationEnd?: () => void;
    className?: string;
    content?: string | React.ReactElement<any> | null;
}

export interface IShowToastOptions {
    mask?: boolean;
    icon?: React.ReactElement<any> | (() => React.ReactElement<any>);
    type?: "success" | "fail" | "warn" | "loading";
    duration?: number;
    position?: "top" | "center" | "bottom";
    onClose?: () => void;
    style?: object;
}


export type ShowContent = string | React.ReactElement<any> | null;
