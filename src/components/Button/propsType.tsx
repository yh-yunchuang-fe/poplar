import * as React from "react";
export default interface ItfButtonProps {
    prefixCls?: string;
    type?: "default" | "primary" | "ghost";
    size?: "sm" | "md" | "lg";
    style?: React.CSSProperties;
    disabled?: any;
    // activeStyle?: object;
    className?: any;
    inline?: any;
    onClick?: (x?: any) => void;
}
