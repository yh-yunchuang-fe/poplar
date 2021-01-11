import * as React from "react";
import InputNumber from "../../components/InputNumber";
import "./index.less";

export default class CheckboxDemo extends React.Component<any, any> {
    public render() {
        return <div className="example-InputNum">
            <div className="tip">默认</div>
            <InputNumber/>
            <div className="tip">指定默认初始值defaultValue</div>
            <InputNumber defaultValue={3}/>
            <div className="tip">指定最大/小值max、min</div>
            <InputNumber max={8} defaultValue={3}/>
            <InputNumber min={1} defaultValue={2}/>
            <div className="tip">设置步值step</div>
            <InputNumber defaultValue={3} step={3}/>
            <div className="tip">注册change事件</div>
            <InputNumber defaultValue={1} max={5} onChange={this.onChange}/>

        </div>;
    }
    public onChange = (selected:boolean) => {
        console.log(selected)
    }
}
