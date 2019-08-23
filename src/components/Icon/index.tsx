import "./index.less";
import IconProps, { ItfType } from "./propsType";
import classNames from "classnames";
import * as React from "react";
export default class Icon extends React.Component<IconProps, any> {
    public static defaultProps = {
        className: "",
        color: "",
        disabled: false,
        name: "",
        onClick: () => "icon",
        prefixCls: "yh-icon",
        size: "default",
        style: {},
        type: "default",
    };
    constructor(props: IconProps) {
        super(props);
        this.state = {};
    }
    public render() {
        const iconMap = [
            "arrow-left",
            "arrow-right",
            "arrow-down",
            "arrow-up",
            "global-close",
            "select-fill",
            "select-line",
            "select-normal",
            "select-active-orange",
            "select-disable",
            "select-normal",
            "Select-time",
            "scan-code",
            "return-new",
            "open-eye",
            "close-eye",
            "delete",
            "loaction",
            "location-small",
            "position",
            "pen",
            "password",
            "minus",
            "minus-circle",
            "minus-outline",
            "plus-circle",
            "plus-outline",
            "plus",
            "money",
            "pay",
            "refund",
            "iphone",
            "phone",
            "telephone",
            "search",
            "scan-code",
            "shopping-cart",
            "pull-new-code",
            "help",
            "reminder",
            "wechat",
            "pay-wechat",
            "wifi",
            "ziti",
            "praise",
            "stamp",
            "happy",
            "normal",
            "angry",
            "gift",
            "gift-card",
            "gift-share",
            "un-evaluate",
            "waimai-cart",
            "waimai",
            "user-active",
            "user-name",
            "user-normal",
            "user",
            "truck",
            "spread",
            "stowing-rampl",
            "switch",
            "cart",
            "add-to-shopping-cart",
            "cart-active",
            "cart-normal",
            "cart-scan",
            "cart-wide",
            "huabi",
            "tijiaochenggong",
            "pingjia",
            "big-arrows-down",
        ];
        const {
            children,
            prefixCls,
            name,
            color,
            style,
            className,
            type,
            size,
            disabled,
            onClick,
            ...restProps
        } = this.props;
        if (iconMap.indexOf(name) === -1) {
            // return Console.warn(the name is not supported);
        }
        const sizeMap: ItfType = {
            lg: 20,
            md: 18,
            sm: 16,
            xs: 14,
            xxs: 12,
        };
        let fontSize = typeof size === "string" ? sizeMap[size] : size;
        fontSize = fontSize || 16;
        const wrapCls = {
            [prefixCls]: true,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-${name}`]: true,
            [className]: className,
        };
        const sty = {
            color,
            fontSize: fontSize + "px",
            ...style,
        };
        return (
            <i
                role="icon"
                className={classNames(wrapCls)}
                style={sty}
                aria-disabled={disabled}
                onClick={disabled ? undefined : onClick}
                {...restProps}
            />
        );
    }
}
