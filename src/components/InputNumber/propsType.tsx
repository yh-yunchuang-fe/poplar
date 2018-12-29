import * as React from "react";
export default interface ItfInputNumProps {
    style?: object;
    className?: string;
    prefixCls?: string;
    disabled?: boolean;
    defaultValue?: number,
    max?: number,
    onChange?: (x?: any) => void;
    size?: "xxs" | "xs" | "sm" | "md" | "lg";
    step?: number,
    color?: string;
}
