import * as React from "react";
export default interface ItfButtonProps {
    prefixCls?: string;
    type?: "default" | "primary" | "warning" | "ghost";
    size?: "default" | "lg" | "md" | "sm" | "xs";
    plain?: any ;
    circle?: any;
    round?: any;
    style?: React.CSSProperties;
    // textStyle?: React.CSSProperties;
    disabled?: any;
    // activeStyle?: object;
    className?: any;
    inline?: any;
    onClick?: (x?: any) => void;
    // loading?: boolean;
    // onPressIn?: (x?: any) => void;
    // onPressOut?: (x?: any) => void;
    // onShowUnderlay?: (x?: any) => void;
    // onHideUnderlay?: (x?: any) => void;
}
