import Tag from "poplar/Tag";
import * as React from "react";

export default class TagDemo extends React.PureComponent<any, any> {
    state = {
        checked: false,
    };

    public render() {
        return (
            <div>
                <Tag>基础 tag</Tag>
                <br />
                <br />
                <Tag type="primary">primary tag</Tag>
                <br />
                <br />
                <Tag size="lg">large tag</Tag>
                <br />
                <br />
                <Tag fill="yellowgreen">自定义填充色</Tag>
                <br />
                <br />
                <Tag color="yellowgreen">自定义字体颜色</Tag>
                <br />
                <br />
                <Tag checkable={true} activeType="primary">可选择tag</Tag>
                <br />
                <br />
                <Tag
                    checkable={true}
                    onChange={(checked) => {
                        this.setState({
                            checked,
                        });
                    }}
                    checked={this.state.checked}
                    defaultChecked={true}
                    activeType="primary"
                >可控的可选择tag</Tag>
                <br />
                <br />
                <Tag
                    checkable={true}
                    activeColor="yellowgreen"
                    activeFill="#9acd3230"
                >自定义activeColor, activeFill</Tag>
            </div>
        );
    }
}
