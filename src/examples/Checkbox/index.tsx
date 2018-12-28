import * as React from "react";
import Checkbox from "../../components/Checkbox";
import "./index.less";

export default class CheckboxDemo extends React.Component<any, any> {
    public render() {
        return <div className="example-checkbox">
            <div className="tip">默认</div>
            <Checkbox> 默认 </Checkbox>
            <div className="tip">方向position</div>
            <Checkbox> 默认positon为left </Checkbox>
            <Checkbox position="right"> position 为 right </Checkbox>
            <div className="tip">初始选中状态</div>
            <Checkbox> 默认defaultChecked为false </Checkbox>
            <Checkbox defaultChecked={true}> defaultChecked为true </Checkbox>
            <div className="tip">禁止</div>
            <Checkbox defaultChecked={true} disabled={true}> defaultChecked为true </Checkbox>
            <Checkbox disabled={true}> defaultChecked为true </Checkbox>
            <div className="tip">获取选中状态</div>
            <Checkbox defaultChecked={true} onChange={this.onChange}> 点击获取状态 </Checkbox>

        </div>;
    }
    public onChange = (selected:boolean) => {
        console.log(selected)
    }
}
