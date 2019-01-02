import * as React from "react";

export default interface IIndicatorProps {
    size?: 'xl' | 'lg' | 'md' | 'sm';
    color?: 'blue' | 'white';
    className?: string;
    style?: React.CSSProperties;
    textStyle?: React.CSSProperties;
    textClassName?: string;
    text?: string;
}
