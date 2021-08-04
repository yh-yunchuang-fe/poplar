import * as React from "react";
import Loading from "poplar/loading";

export default class ToastDemo extends React.Component {
    componentDidMount(){
        const id  = Loading.loading()
    }
    render() {
        return (
            <div style={{
                display: "flex",
                minHeight: "80vh",
                flexDirection: "column",
                justifyContent: "space-around",
            }}>
            </div>
        );
    }
}

