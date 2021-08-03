import * as React from 'react'
import classNames from 'classnames'
import './index.less'
import Dialog from '../Dialog'
import IPopupProps from './propsType'

export default class Popup extends React.Component<IPopupProps, any> {
    constructor(props: IPopupProps) {
        super(props)
    }

    static defaultProps = {
        prefixCls: 'yh-popup',
        position: 'fixed',

    }

    render() {
        let { prefixCls, position, maskStyle, wrapStyle, children, style, className, ...restProps } = this.props
        style = { ...style, position: position }
        maskStyle = { ...maskStyle, position: position }
        wrapStyle = { ...wrapStyle, position: position }
        const cls = classNames({
            [prefixCls]: true,
            [className]: className
        })

        return (
            <Dialog
                animation="slide-up"
                maskAnimation="fade"
                maskStyle={maskStyle}
                wrapStyle={wrapStyle}
                className={cls}
                style={style}
                {...restProps}
            >
                {children}
            </Dialog>
        )
    }
    shouldComponentUpdate(nextProps: IPopupProps) {
        let bodys = document.getElementsByTagName('body')
        if (this.props.visible !== nextProps.visible) {
            console.log("弹窗弹出，禁止body滚动")
            if (bodys.length) {
                bodys[0].style.overflow = nextProps.visible ? 'hidden' : 'visible'
            }
        }
        return this.props !== nextProps
    }
    componentWillUnmount(){
        let bodys = document.getElementsByTagName('body')
        bodys[0].style.overflow = 'visible'
    }
}
