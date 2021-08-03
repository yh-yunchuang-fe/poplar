/**
 * Created by beilunyang on 2018/8/31
 */
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
        // TODO: toast去除DOM操作
        const loading = div.querySelector(".loading-mask");
        loading.classList.add("yh-zoom-leave", "yh-zoom-leave-active");
        ReactDOM.unmountComponentAtNode(div);
    },
    show,
};
