import * as React from "react";
import {
    Link,
    Route,
    Switch,
    withRouter,
} from "react-router-dom";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Icon from "../Icon";
import Dialog from "../Dialog";
import "./index.less";
import Modal from "../Modal";
import Popup from "../Popup";
import ImgPreview from "../ImgPreview";
import Tag from "../Tag";

interface IRoute {
    path: string;
    component: React.ComponentType;
    name: string;
}

const routes: IRoute[] = [
    {
        component: Button,
        name: "Button",
        path: "/Button",
    }, {
        component: Icon,
        name: "Icon",
        path: "/Icon",
    },{
        component: Checkbox,
        name: "Checkbox",
        path: "/Checkbox",
    }, {
        component: Dialog,
        name: "Dialog",
        path: "/Dialog",
    }, {
        component: Modal,
        name: "Modal",
        path: "/Modal",
    }, {
        component: Popup,
        name: "Popup",
        path: "/Popup",
    }, {
        component: ImgPreview,
        name: "ImgPreview",
        path: "/ImgPreview",
    }, {
        component: Tag,
        name: "Tag",
        path: "/Tag",
    },
];

class App extends React.PureComponent<any, any> {

    public render() {
        return (
            <div className="container">
                {this.renderHeader()}
                {this.renderRoutes()}
            </div>
        );
    }

    private backHome = () => {
        this.props.history.push("/");
    }

    private renderHomeList = () => {
        const demoList = routes.map((route, index) => {
            return (
                <li className="list-item" key={index}>
                    <Link to={`${route.path}`}>
                        {route.name}
                    </Link>
                </li>
            );
        });
        return (
            <ul className="demo-list">
                {demoList}
            </ul>
        );
    }

    private renderHeader() {
        const pathname = this.props.location.pathname;
        const demoName = pathname.split("/")[1];
        if (demoName) {
            return (
                <div className="demo-header">
                    <h1 onClick={this.backHome}>Home</h1>
                    <span className="separate">|</span>
                    <h2>{demoName}</h2>
                </div>
            );
        }
        return (
            <div className="demo-header">
                <h1>Home</h1>
                <span className="separate">|</span>
                <span>Poplar-基于React的移动端组件库</span>
            </div>
        );
    }

    private renderRoutes = () => {
        const routeList = routes.map((route, index) => {
            return (
                <Route exact={true} path={route.path} component={route.component} key={index}/>
            );
        });
        return (
            <Switch>
                {<Route exact={true} path="/" component={this.renderHomeList}/>}
                {routeList}
            </Switch>
        );
    }
}
export default withRouter(App);
