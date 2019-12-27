import * as React from "react";

export default interface IIndicatorProps {
    size?: 'xl' | 'lg' | 'md' | 'sm';
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    textStyle?: React.CSSProperties;
    textClassName?: string;
    text?: string;
}
