import "./index.less";
import InputNumProps from "./propsType";
import classNames from "classnames";
import Icon from "../Icon";
import * as React from "react";
export default class InputNumber extends React.Component<InputNumProps, any> {
    public static defaultProps = {
        className: "",
        color: "#FD7622",
        defaultValue: 0,
        disabled: false,
        max: 0,
        min: 0,
        onChange: () => "InputNumber",
        prefixCls: "yh-checkbox",
        style: {},
        size: "lg",
        step: 1,
    };
    constructor(props: InputNumProps) {
        super(props);
        this.state = {
            value: false
        };
    }
    public render() {
        const {
            prefixCls,
            style,
            className,
            defaultValue,
            disabled,
            onChange,
            ...restProps
        } = this.props;
        const { value } = this.state
        const wrapCls = {
            [prefixCls]: true,
            [`${prefixCls}-disabled`]: disabled,
            [className]: className,
        };
        return (
            <div className={classNames(wrapCls)} style={style} {...restProps}>
                <div className="minus-module">{value >= 1 ? this.renderMinusIcon() : null}</div>
                <div className="num-module">{value > 0? value : null}</div>
                <div className="plus-module">{ this.renderPlusIcon() }</div>
            </div>
        );
    }
    public handleMinus = () => {
        const { step, onChange, min } = this.props;
        let { value } = this.state;
        // value = max && value === max && max % step != 0 ? value - max % step : value-step;
        value = value - step < min ? min : value - step;
        this.setState({
            value,
        });
        onChange && onChange(value);
    }
    public handlePlus = () => {
        const { step, onChange, max } = this.props;
        let { value } = this.state;
        value = max && value + step > max ? max : value + step;
        this.setState({
            value,
        });
        onChange && onChange(value);
    }
    public componentWillMount() {
        const { defaultValue } = this.props;
        this.setState({
            value: defaultValue,
        });
    }
    public renderMinusIcon() {
        const { disabled, color, size, prefixCls, max, step, min} = this.props;
        const { value } = this.state;
        const icon = "minus-circle";
        const iconColor = value > min ? color : "#DDDDDD";
        const allowMinus = !disabled && value > min
        return (
            <div onClick={allowMinus ? this.handleMinus : undefined}>
                <Icon name={icon} size={size} color={iconColor} />
            </div>
        );
    }
    public renderPlusIcon() {
        const { disabled, color, size, prefixCls, max, step} = this.props;
        const { value } = this.state;
        const icon = "plus-circle";
        let allowPlus = max ? !disabled &&  value < max : !disabled;
        return (
            <div onClick={allowPlus ? this.handlePlus : undefined}>
                <Icon name={icon} size={size} color={color} />
            </div>
        );
    }
}
