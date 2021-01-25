# Tag
## 引入
```
import { Tag } from 'toy-poplar' 
```

## 使用方法
### 基础tag
```
<Tag>基础 tag</Tag>
```

### primary tag
```
<Tag type="primary">primary tag</Tag>
```
### large tag
```
<Tag type="primary">primary tag</Tag>
```
### 自定义填充色
```
<Tag fill="yellowgreen">自定义填充色</Tag>
```
### 自定义字体颜色
```
<Tag color="yellowgreen">自定义字体颜色</Tag>
```
### 可选择tag
```
<Tag checkable={true} activeType="primary">可选择tag</Tag>
```
### 可控可选择Tag
```
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
```

### 自定义activeColor, activeFill
```
<Tag
    checkable={true}
    activeColor="yellowgreen"
    activeFill="#9acd3230"
>自定义activeColor, activeFill</Tag>
```

## 使用示例

<code
src="../../examples/Tag/index.tsx" id="Tag-demo-example" defaultShowCode={true} compact={true}></code>


