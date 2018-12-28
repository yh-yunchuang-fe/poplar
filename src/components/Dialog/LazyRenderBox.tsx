import * as React from "react";

class LazyRenderBox extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const className = this.props.className;
        const props = {...this.props};
        delete props.visible;
        props.className = className;

        return (
            <div {...props}/>
        );
    }
}

export default LazyRenderBox;
