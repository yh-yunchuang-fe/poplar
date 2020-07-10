/**
 * Created by zhangyi on 2017/10/23.
 */
import * as React from "react";
import Dialog from "../Dialog";
import "./style/index.less";
import { IModalProps, IButtonProps } from "./propsType";


export default class Modal extends React.Component<IModalProps, any> {
    constructor(props: IModalProps){
        super(props)
    }

    public static defaultProps = {
        prefixCls: 'yh-modal',
        title: '',
        className: '',
        maskClassName: '',
        // @ts-ignore
        footer: []
    }

    renderHeader() {
        const { prefixCls, title } = this.props
        return (
            <div className={`${prefixCls}-header`}>
                <div className={`${prefixCls}-title`}>{title}</div>
            </div>
        )
    }

    renderFooter() {
        const { prefixCls, footer } = this.props
        const btnGroupClass = `${prefixCls}-button-group-h`;

        if (footer.length > 2) {
            console.warn('暂不支持超过2个按钮')
        }

        let footerDom: any = null;
        if (footer && footer.length) {
            if (footer.length === 1) {

                const { text, type, color, onPress } = footer[0] as IButtonProps;
                const onClickFn = function(e:any) {
                    e.preventDefault();
                    if (onPress) {
                        onPress()
                    }
                }

                let btnCls = type || 'primary'

                footerDom = (
                    <div className={btnGroupClass}>
                        <a href="javascript:;" className={`${prefixCls}-button ${btnCls}`} role="button" style={ { color } } onClick={onClickFn}>
                            {text || 'Button'}
                        </a>
                    </div>
                )
            } else if (footer.length === 2) {

                const buttons = footer.map((button, idx) => {
                    const { text, type, color, onPress } = button as IButtonProps;
                    const onClickFn = function(e:any) {
                        e.preventDefault();
                        if (onPress) {
                            onPress()
                        }
                    }

                    let btnCls = type || "primary"
                    let secondCls = idx === 0 ? '' : 'btn-second'
                    return (
                        <a key={idx} href="javascript:;" className={`${prefixCls}-button ${btnCls} ${secondCls}`} role="button" style={ { color } } onClick={onClickFn}>
                            {text || 'Button'}
                        </a>
                    )
                })
                footerDom = (
                    <div className={btnGroupClass}>
                        { buttons }
                    </div>
                )

            } else if (footer.length > 2) {
                console.warn('最多支持两个按钮');
            }
        }

        return (
            <div className={`${prefixCls}-footer`}>
                {footerDom}
            </div>
        )
    }



    render() {
        const {
            prefixCls,
            style,
            children,
            className,
            maskClassName,
            ...resetProps
        } = this.props

        const rootStyle = {
            width: '7rem',
            height: 'auto',
            ...style,
        }

        return (
            <Dialog
                prefixCls={prefixCls}
                style={rootStyle}
                className={className}
                maskClassName={maskClassName}
                {...resetProps}>
                <div className={`${prefixCls}-content`}>
                    { this.renderHeader() }
                    <div className={`${prefixCls}-body`}>
                        { children }
                    </div>
                    { this.renderFooter() }
                </div>
            </Dialog>
        )
    }
}
