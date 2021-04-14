import Button from '../../src/Button';
import * as React from 'react';
import './index.less';

export default class ButtonDemo extends React.Component<any, any> {
  public render() {
    return (
      <div className="example-button">
        {/*<div>圆形按钮</div>*/}
        {/*<Button circle="true" inline="true">*/}
        {/*圆形按钮*/}
        {/*</Button>*/}
        {/*<Button type="primary" circle="true" inline="true">*/}
        {/*primary圆形*/}
        {/*</Button>*/}
        <div className="title">全局按钮</div>
        <Button>默认按钮</Button>
        <Button disabled="true">默认禁止</Button>
        <Button type="primary">primary 按钮</Button>
        <Button type="primary" disabled="true">
          primary 禁止
        </Button>
        <Button type="ghost">ghost</Button>
        <Button type="ghost" disabled="true">
          ghost 禁止
        </Button>

        <div className="title">行内按钮</div>
        <Button inline="true">默认按钮</Button>
        <Button disabled="true" inline="true">
          默认禁止
        </Button>
        <Button type="primary" inline="true">
          primary按钮
        </Button>
        <Button disabled="true" type="primary" inline="true">
          primary禁止
        </Button>

        <div className="title">size大小</div>
        <Button size="sm" inline="true">
          mini按钮
        </Button>
        <Button size="md" inline="true">
          小按钮
        </Button>
        <Button size="lg" inline="true">
          大按钮
        </Button>
        <div className="title">自定义样式</div>
        <Button className="customStyle" style={{ marginLeft: 30 }}>
          自定义按钮
        </Button>
      </div>
    );
  }
}
