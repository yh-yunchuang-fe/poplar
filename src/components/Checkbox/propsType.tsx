import * as React from "react";
export default interface ItfCheckProps {
    // name: string;
    style?: object;
    className?: string;
    prefixCls?: string;
    // type?: "default" | "filled" | "outlined";
    disabled?: boolean;
    onChange?: (x?: any) => void;
    // checked?: boolean;
    icon?: boolean;
    position?: boolean;
    defaultChecked?: boolean;
    textStyle?: object;
}
