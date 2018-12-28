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
        textStyle: {},
        // type: "default",
    };
    constructor(props: CheckProps) {
        super(props);
        this.state = {
            checked: false,
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
    public renderIcon() {
        // const { disabled } = this.props;
        // if (typeof icon === 'boolean' && icon) {
        //     const defaultIcon = (checked) => {
        //         let icon = checked ? 'checked' : 'radio-off';
        //         let color = '#24A8E8'
        //         if(disabled) {
        //             icon = 'radio-off'
        //             color = '#ececec'
        //         }
        //         return (
        //             <div className="icon">
        //                 <Icon name={icon} color={color} />
        //             </div>
        //         );
        //     };
        //     return defaultIcon(this.state.checked);
        // }
        // return null;
    }
}
