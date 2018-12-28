import * as React from "react";
import {PositionProperty} from "csstype";

export default interface IPopupProps {
    position?: PositionProperty;
    prefixCls?: string;
    style?: React.CSSProperties;
    className?: string;
    maskClassName?: string;
    maskCloseable?: boolean;
    transitionName?: string;
    transitionTimeout?: number;
    mask?: boolean;
    maskTransition?: boolean;
    maskTransitionName?: string;
    maskTransitionTimeout?: number;
    zIndex?: any;
    maskStyle?: React.CSSProperties | null;
    visible: boolean;
    wrapClassName?: string;
    wrapStyle?: object;
    onClose?: (x?: any) => void;
}
