import "./index.less";

import CheckProps from "./propsType";

import classNames from "classnames";
import Icon from "../Icon";

import * as React from "react";

export default class Checkbox extends React.Component<CheckProps, any> {
    public static defaultProps = {
        // activeStyle: {},
        checked: false,
        className: "",
        color: "#FD7622",
        defaultChecked: false,
        disabled: false,
        // loading: false,
        // name: "",
        // icon: true,
        onChange: () => "checkbox",
        position: "left",
        prefixCls: "yh-checkbox",
        // size: "default",
        style: {},
        size: "md",
        textStyle: {}
        // type: "default",
    };
    constructor(props: CheckProps) {
        super(props);
        this.state = {
            checked: false
        };
    }
    public render() {
        const {
            children,
            prefixCls,
            position,
            style,
            textStyle,
            className,
            // checked,
            defaultChecked,
            // type,
            // size,
            disabled,
            onChange,
            ...restProps
        } = this.props;
        const wrapCls = {
            [prefixCls]: true,
            // [`${prefixCls}-disabled`]: disabled,
            // [`${prefixCls}-${name}`]: true,
            [className]: className,
        };
        const sty = {
            // color,
            // fontSize: fontSize + "px",
            ...style,
        };
        return (
            <div
                className={prefixCls}
                {...restProps}
                onClick={disabled ? undefined : this.handleClick}
            >
                <div className={"check-container"} style={style}>
                    {position === "left" ? this.renderIcon() : null}
                    {children}
                    {position === "right" ? this.renderIcon() : null}
                </div>
            </div>
        );
    }
    public handleClick = () => {

        const checked = !this.state.checked;
        this.setState({
            checked,
        });
        // console.log(checked)

        if (this.props.onChange) {
            this.props.onChange(checked);
        }
    };

    public componentWillMount() {
        const { defaultChecked } = this.props;
        this.setState({
            checked: defaultChecked
        });
    }
    public renderIcon() {
        const { disabled, color, size, prefixCls, position } = this.props;
        const icon = this.state.checked ? "select-fill" : "select-normal";
        const iconColor = this.state.checked ? color : "#DDDDDD";
        const checkCls = {
            [`${prefixCls}-disabled`]: disabled,
            // [`${prefixCls}-${name}`]: true,
            "icon-right": position === "left",
            "icon-left": position === "right",
        };
        return (
            <div className={classNames(checkCls)}>
                <Icon name={icon} size={size} color={iconColor} />
            </div>
        );
    }
}
