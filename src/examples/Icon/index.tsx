import * as React from "react";
import Icon from "../../components/Icon";
import "./index.less";

export default class IconDemo extends React.Component<any, any> {
    public render() {
        return <div className="example-Icon">{this.renderIcons()}</div>;
    }
    public renderIcons() {
        const iconMap = [
            "global-close",
            "select-fill",
            "select-line",
            "select-normal",
            "delete",
            "loaction",
            "location-small",
            "minus",
            "minus-circle",
            "minus-outline",
            "plus-circle",
            "plus-outline",
            "plus",
            "money",
            "pay",
            "phone",
            "telephone",
            "plus",
            "search",
            "scan-code",
            "shopping-cart",
            "pull-new-code",
            "help",
            "reminder",
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
