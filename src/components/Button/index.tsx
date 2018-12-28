import "./index.less";

import ButtonProps from "./propsType";

import classNames from "classnames";
import * as React from "react";

export default class Button extends React.Component<ButtonProps, any> {

    public static defaultProps = {
        // activeStyle: {},
        circle: false,
        className: "",
        disabled: false,
        inline: false,
        // loading: false,
        onClick: () => "button",
        plain: false,
        prefixCls: "yh-button",
        // onPressIn: (x?: any) => {},
        // onPressOut: (x?: any) => {},
        round: true,
        size: "default",
        style: {},
        // textStyle: {},
        type: "default",
    };

    constructor(props: ButtonProps) {
        super(props);
    }

    public render() {
        const {
            children,
            prefixCls,
            className,
            type,
            size,
            inline,
            plain,
            round,
            disabled,
            onClick,
            circle,
            ...restProps
        } = this.props;
        const wrapCls = {
            [prefixCls]: true,
            [`${prefixCls}-primary`]: type === "primary",
            [`${prefixCls}-plain`]: plain,
            [`${prefixCls}-round`]: round,
            // [`${prefixCls}-warning`]: type === "warning",
            [`${prefixCls}-sm`]: size === "sm",
            [`${prefixCls}-xs`]: size === "xs",
            [`${prefixCls}-circle`]: circle,
            [`${prefixCls}-lg`]: size === "lg",
            [`${prefixCls}-inline`]: inline,
            [`${prefixCls}-disabled`]: disabled,
            [className]: className,
        };
        return (
            <a
                // onTouchStart={()=>{}}
                role="button"
                className={classNames(wrapCls)}
                onClick={disabled ? undefined : onClick}
                aria-disabled={disabled}
                {...restProps}
            >
                <span>{children}</span>
            </a>
        );
    }
}
