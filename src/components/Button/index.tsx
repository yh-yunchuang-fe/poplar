import "./index.less";
import ButtonProps from "./propsType";
import classNames from "classnames";
import * as React from "react";
export default class Button extends React.Component<ButtonProps, any> {
    public static defaultProps = {
        prefixCls: "yh-button",
        type: "default",
        size: "md",
        style: {},
        className: "",
        disabled: false,
        inline: false,
        onClick: () => "button",
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
            disabled,
            onClick,
            ...restProps
        } = this.props;
        const wrapCls = {
            [prefixCls]: true,
            [`${prefixCls}-primary`]: type === "primary",
            [`${prefixCls}-ghost`]: type === "ghost",
            [`${prefixCls}-sm`]: size === "sm",
            [`${prefixCls}-md`]: size === "md",
            [`${prefixCls}-lg`]: size === "lg",
            [`${prefixCls}-inline`]: inline,
            [`${prefixCls}-disabled`]: disabled,
            [className]: className,
        };
        return (
            <a
                onTouchStart={()=>{}}
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
