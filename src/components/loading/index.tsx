import * as React from "react";
import * as ReactDOM from "react-dom";
import Loading from "./Loading";
import {
    IShowToastOptions,
} from "./propsType";

const show = (options: IShowToastOptions = {}) => {
    const {
        type,
        style,
    } = options;
    const div = document.createElement("div");
    document.getElementById("modal-root").appendChild(div);
    ReactDOM.render(
        <Loading
            type={type}
            style={style}
        />
    , div);
    return div;
};

export default {
    loading() {
        return show({
            type: "loading",
        });
    },
    hide(div: any) {
        ReactDOM.unmountComponentAtNode(div);
    },
    show,
};
