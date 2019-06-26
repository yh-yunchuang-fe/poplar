import * as React from "react";
import Icon from "poplar/Icon";
import "./index.less";

export default class IconDemo extends React.Component<any, any> {
    public render() {
        return <div className="example-Icon">{this.renderIcons()}</div>;
    }
    public renderIcons() {
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
        ];
        return iconMap.map((name, idx) => {
            return (
                <div
                    className="item"
                    key={idx}
                    onClick={this.handleClick.bind(this, idx, name)}
                >
                    <Icon name={name} />
                    <span className="name">{name}</span>
                    <input defaultValue={name} className="copy" />
                </div>
            );
        });
    }
    public handleClick(idx: number, name: string) {
        if (name) {
            const el = document.querySelectorAll(".copy")[idx];
            // el.focus();
            // el.setSelectionRange(0, el.value.length);
            // document.execCommand("copy", true);
            // window.alert("复制成功");
        }
    }
}
