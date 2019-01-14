import "./index.less";
import CheckProps from "./propsType";
import classNames from "classnames";
import Icon from "../Icon";
import * as React from "react";
export default class Checkbox extends React.Component<CheckProps, any> {
    public static defaultProps = {
        className: "",
        color: "#FD7622",
        defaultChecked: false,
        disabled: false,
        onChange: () => "checkbox",
        position: "left",
        prefixCls: "yh-checkbox",
        style: {},
        size: "md",
        // textStyle: {}
    };
    constructor(props: CheckProps) {
        super(props);
        this.state = {
            ischecked: false
        };
    }
    public render() {
        const {
            // checked,
            children,
            prefixCls,
            position,
            style,
            // textStyle,
            className,
            // defaultChecked,
            disabled,
            // onChange,
            ...restProps
        } = this.props;
        const wrapCls = {
            [prefixCls]: true,
            [className]: className,
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

        const ischecked = !this.state.ischecked;
        this.setState({
            ischecked,
        });
        if (this.props.onChange) {
            this.props.onChange(ischecked);
        }
    };

    public componentDidMount() {
        const { defaultChecked } = this.props;
        this.setState({
            ischecked: defaultChecked
        });
    }
    public componentWillReceiveProps(nextProps:CheckProps) {
        const { checked } = nextProps;
        if(typeof checked === 'boolean') {
            this.setState({
                ischecked: checked,
            });
        }
    }
    public renderIcon() {
        const { disabled, color, size, prefixCls, position } = this.props;
        const { ischecked } = this.state
        const icon = ischecked ? "select-fill" : "select-normal";
        const iconColor = ischecked ? color : "#DDDDDD";
        const checkCls = {
            [`${prefixCls}-disabled`]: disabled,
            "icon-left": position === "left",
            "icon-right": position === "right",
        };
        return (
            <div className={classNames(checkCls)}>
                <Icon name={icon} size={size} color={iconColor} />
            </div>
        );
    }
}
