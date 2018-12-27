import * as React from "react";
import Button from "../../components/Button";
import "./index.less";

export default class ButtonDemo extends React.Component<any, any> {
  public render() {
    return (
      <div className="example-button">
        <div>圆形按钮</div>
        <Button circle inline>圆形按钮</Button>
        <Button type="primary" circle inline>primary圆形</Button>
        <div>全局按钮</div>
        <Button>默认按钮</Button>
        <Button disabled>默认禁止</Button>
        <Button type="primary">primary 按钮</Button>
        <Button type="primary" disabled>primary 禁止</Button>
        <Button type="primary" plain>primary 朴素</Button>
        <Button type="primary" plain disabled>primary 朴素 禁止</Button>
        <div>行内按钮</div>
        <Button inline>默认按钮</Button>
        <Button type='primary' inline>primary按钮</Button>
        <Button disabled inline>默认禁止</Button>
        <Button disabled type='primary' inline>primary禁止</Button>
        <div>size大小</div>
        <Button size="xs" inline>mini按钮</Button>
        <Button size="sm" inline>小按钮</Button>
        <Button size="lg" inline>大按钮</Button>
        <div>自定义样式</div>
        <Button className="customStyle" style={{marginLeft: 30}}>自定义按钮</Button>

      </div>
    );
  }
}
