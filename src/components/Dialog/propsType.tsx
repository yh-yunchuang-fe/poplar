import * as React from "react";

export default interface IDialogProps {
    prefixCls?: string;
    maskClosable?: boolean;
    className?: string;
    maskClassName?: string;
    transitionName?: string | object;
    animation?: string;
    transitionTimeout?: number;
    mask?: boolean;
    maskAnimation?: string;
    maskTransition?: boolean;
    maskTransitionName?: string;
    maskTransitionTimeout?: number;
    zIndex?: any;
    maskStyle?: React.CSSProperties | null;
    children?: any;
    visible: boolean;
    wrapClassName?: string;
    wrapStyle?: object;
    style?: React.CSSProperties;
    onClose?: (x?: any) => void;
    usePortal?: boolean;
}
