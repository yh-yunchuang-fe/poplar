import * as React from "react";
export default interface ItfInputNumProps {
    // name: string;
    style?: object;
    className?: string;
    prefixCls?: string;
    // type?: "default" | "filled" | "outlined";
    disabled?: boolean;
    defaultValue?: number,
    // min?: number,
    max?: number,
    onChange?: (x?: any) => void;
    // checked?: boolean;
    size?: "xxs" | "xs" | "sm" | "md" | "lg";
    step?: number,
    color?: string;
    // textStyle?: object;
}
