import * as React from "react";
import Checkbox from "../../components/Checkbox";
import "./index.less";

export default class CheckboxDemo extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            checked: true
        };
    }
    public render() {
        const {checked} = this.state
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
            <Checkbox defaultChecked={true} checked={checked} onChange={this.getState}> 点击获取状态 </Checkbox>
            <div className="tip">改变icon大小及颜色</div>
            <Checkbox defaultChecked={true} onChange={this.onChange.bind(this)} size="lg" color="lime"> <span className="changeStyle">改变icon的样式</span> </Checkbox>

        </div>;
    }
    public getState = (selected:boolean) => {
        // console.log(selected)
    }
    public onChange = (selected:boolean) => {
        // console.log(selected)
        let { checked } = this.state
        // console.log(checked)
        this.setState({
            checked: !checked,
        })
    }
}
