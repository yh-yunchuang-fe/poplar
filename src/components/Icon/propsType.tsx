import * as React from "react";
export default interface ItfIconProps {
    name: string;
    color?: string;
    size?: string | number;
    style?: object;
    className?: string;
    prefixCls?: string;
    type?: "default" | "filled" | "outlined";
    disabled?: boolean;
    onClick?: (x?: any) => {}
}
export interface ItfType {
    [index: string]: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
    xxs: number;
}
