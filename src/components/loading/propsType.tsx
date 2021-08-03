import * as React from "react";

export interface IToastProps extends IShowToastOptions {
    className?: string;
    prefixCls?: string;
}

export interface IShowToastOptions {
    type?:"loading";
    duration?: number;
    onClose?: () => void;
    style?: object;
}


export type ShowContent = string | React.ReactElement<any> | null;
