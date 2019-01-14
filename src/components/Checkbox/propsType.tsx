import * as React from "react";
export default interface ItfCheckProps {
    style?: object;
    className?: string;
    prefixCls?: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (x?: any) => void;
    size?: "xxs" | "xs" | "sm" | "md" | "lg";
    color?: string;
    position?: "left" | "right";
    defaultChecked?: boolean;
    // textStyle?: object;
}
