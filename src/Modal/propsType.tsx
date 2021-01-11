import * as React from "react";

export interface IButtonProps {
    text: string;
    color?: string;
    type?: "primary" | "default";
    onPress?: (x?: any) => void;
}

export interface IModalProps {
    prefixCls?: string;
    title?: string;
    footer?: [IButtonProps];
    style?: React.CSSProperties;
    className?: string;
    maskClassName?: string;
    maskCloseable?: boolean;
    transitionName?: string;
    animation?: string;
    transitionTimeout?: number;
    mask?: boolean;
    maskAnimation?: string;
    maskTransition?: boolean;
    maskTransitionName?: string;
    maskTransitionTimeout?: number;
    zIndex?: any;
    maskStyle?: React.CSSProperties | null;
    visible: boolean;
    wrapClassName?: string;
    wrapStyle?: object;
    onClose?: (x?: any) => void;
    usePortal?: boolean;
}
