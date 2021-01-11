import * as React from "react";
import classNames from "classnames";
import "./index.less";
import IIndicatorProps from "./propsType"

export default class Indicator extends React.Component<IIndicatorProps, any> {
    public static defaultProps = {
        size: 'md',
        color: 'blue',
        text: '',
        className: '',
        textClassName: '',
    }
    switchColor = (color: string) => {
        switch(color){
            case 'blue': return require('./imgs/blue.png');
                        break;
            case 'white': return require('./imgs/white.png');
                        break;
            case 'gray': return require('./imgs/gray.png');
                        break;
            case 'orange': return require('./imgs/orange.png');
                        break;
            default: return require('./imgs/blue.png')
        }
    }
    render() {
        const {
            size = 'md',
            color = 'blue',
            text,
            className,
            textStyle,
            textClassName,
            ...restProps
        } = this.props;

        const imgCls = classNames(`yh-indicator-loading-${size}`, 'yh-indicator-loading');
        // const spinnerImg = color === 'blue' ? require('./imgs/loading-blue.png') : require('./imgs/loading-white.png');
        const spinnerImg = this.switchColor(color)
        const cls = classNames('yh-indicator', className);
        const textCls = classNames('yh-indicator-tip', textClassName);
        return (
            <div className={cls} {...restProps}>
                <img
                    src={spinnerImg}
                    className={imgCls}
                />
                {
                    text ? <span className={textCls} style={textStyle}>{text}</span> : null
                }
            </div>
        )
    }
}
