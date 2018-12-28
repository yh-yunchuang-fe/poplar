import "./index.less";

import CheckProps from "./propsType";

import classNames from "classnames";
import * as React from "react";

export default class Checkbox extends React.Component<CheckProps, any> {
    public static defaultProps = {
        // activeStyle: {},
        className: "",
        defaultChecked: false,
        disabled: false,
        // loading: false,
        // name: "",
        icon: true,
        onChange: () => "checkbox",
        position: "left",
        prefixCls: "yh-checkbox",
        // size: "default",
        style: {},
        textStyle: {},
        // type: "default",
    };
    constructor(props: CheckProps) {
        super(props);
        this.state = {};
    }
    public render() {
        const {
            children,
            prefixCls,
            icon,
            position,
            style,
            textStyle,
            className,
            defaultChecked,
            // type,
            // size,
            disabled,
            onChange,
            ...restProps
        } = this.props;
        const wrapCls = {
            [prefixCls]: true,
            [`${prefixCls}-disabled`]: disabled,
            // [`${prefixCls}-${name}`]: true,
            [className]: className,
        };
        const sty = {
            // color,
            // fontSize: fontSize + "px",
            ...style,
        };
        return (
            <i
                role="icon"
                className={classNames(wrapCls)}
                style={sty}
                aria-disabled={disabled}
                onChange={disabled ? undefined : onChange}
                {...restProps}
            />
        );
    }
}
