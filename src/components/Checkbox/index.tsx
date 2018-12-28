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
            icon,
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
            // <i
            //     role="icon"
            //     className={classNames(wrapCls)}
            //     style={sty}
            //     aria-disabled={disabled}
            //     onClick={disabled ? undefined : onChange}
            //     {...restProps}
            // />
            <div
                className={prefixCls}
                {...restProps}
                onClick={this.handleClick}
            >
                <div className={"container"} style={style}>
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
        const { disabled } = this.props;
        const { checked } = this.state;
        const icon = checked ? "checked" : "select-normal";
        const color = checked ? "#FD7622" : "#DDDDDD";
        return (
            <div className="icon">
                <Icon name={icon} color={color} />
            </div>
        );
    }
}
