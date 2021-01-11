/**
 * Created by zhangyi on 2017/10/23.
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Modal from '../Modal'

export interface IButtonProps {
    text: string;
    color?: string;
    type?: 'primary' | 'default'
    onPress?: any;
}

function touchMove (event:any) {
    // 判断默认行为是否可以被禁用
    if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
            event.preventDefault();
        }
    }
}

export default function alert(...args:any) {
    const title = args[0]
    const content = args[1]
    const actions = args[2] || [{text: '确定'}]
    const prefixCls = 'yh-modal'
    const modalRoot = document.getElementById('modal-root')

    if(!title && !content) {
        return {
            close: () => {}
        }
    }

    let div = document.createElement('div')
    modalRoot.appendChild(div)

    modalRoot.addEventListener('touchmove', touchMove, false)

    function close() {
        const maskDom = div.querySelector(`.${prefixCls}-mask`)
        const wrapDom = div.querySelector(`.${prefixCls}-wrap`)

        // 直接移除dom不会有动画，需要先添加关闭动画，在移除dom
        maskDom.classList.add('yh-fade-leave', 'yh-fade-leave-active')
        wrapDom.classList.add('yh-zoom-leave', 'yh-zoom-leave-active')

        setTimeout(()=>{
            ReactDOM.unmountComponentAtNode(div)
            modalRoot.removeEventListener('touchmove', touchMove, false)
            if (div) {
                modalRoot.removeChild(div);
            }
        }, 210)
    }

    const footer = actions.map((btn:IButtonProps, index:number) => {
        const orginPress = btn.onPress || function() {};
        btn.onPress = () => {
            const res = orginPress()
            if (res && res.then) {
                res.then(() => {
                    close()
                })
            } else {
                close()
            }
        }
        btn.type = 'default'
        if (index === 1) {
            btn.type = 'primary'
        }
        return btn;
    })

    ReactDOM.render(
        <Modal
            usePortal={false}
            visible
            prefixCls={prefixCls}
            title={title}
            maskCloseable={false}
            animation="zoom"
            maskAnimation="fade"
            footer={footer}
        >
            <div style={{zoom: 1, overflow: 'hidden'}}>{content}</div>
        </Modal>,
        div
    );

    return {
        close
    };
}
