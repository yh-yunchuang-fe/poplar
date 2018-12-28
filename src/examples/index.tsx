import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "normalize.css";
import '../assets/css/base.less'
import "./index.less";

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById("app"),
);
