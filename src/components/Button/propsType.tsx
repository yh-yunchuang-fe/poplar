import * as React from "react";
export default interface buttonProps {
    prefixCls?: string;
    type?: "default" | "primary" | "warning" | "ghost";
    size?: "default" | "large" | "medium" | "small" | "mini";
    plain?: boolean;
    round?: boolean;
    style?: React.CSSProperties;
    // textStyle?: React.CSSProperties;
    disabled?: boolean;
    // activeStyle?: object;
    className?: any;
    inline?: boolean;
    onClick?: (x?: any) => void;
    // loading?: boolean;
    // onPressIn?: (x?: any) => void;
    // onPressOut?: (x?: any) => void;
    // onShowUnderlay?: (x?: any) => void;
    // onHideUnderlay?: (x?: any) => void;
}
