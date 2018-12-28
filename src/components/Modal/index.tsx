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

    renderFooterButton(button:IButtonProps, prefixCls:string, index:number) {
        const onClickFn = function(e:any) {
            e.preventDefault();
            if (button.onPress) {
                button.onPress()
            }
        }

        let firstCls = index === 1 ? '' : `${prefixCls}-button-first`;

        return (
            <a key={index} href="javascript:;" className={`${prefixCls}-button ${firstCls}`} role="button" onClick={onClickFn}>
                {button.text || 'Button'}
            </a>
        )
    }

    renderFooter() {
        // @ts-ignore
        const { prefixCls, footer = [] } = this.props
        const btnGroupClass = `${prefixCls}-button-group-h`;

        if (footer.length > 2) {
            console.warn('暂不支持超过2个按钮')
        }
        const footerDom = footer.length ? <div className={btnGroupClass}>
            {(footer  as [IButtonProps]).map((button, index) => this.renderFooterButton(button, prefixCls, index))}
        </div> : null;

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
