/**
 * Created by zhangyi on 2017/10/19.
 */
import * as React from 'react'
import Modal from "../../components/Modal"
import alert from "../../components/alert"
import Button from "../../components/Button"
import './index.less'

export default class ModalDemo extends React.Component<any, any> {
    constructor (props: any) {
        super(props)
        this.state = {
            visible: false
        }
    }

    show = () => {
        this.setState({
            visible: true
        })
    }

    hide = () => {
        this.setState({
            visible: false
        })
    }

    openAlert = () => {
        alert('', '你确定吗？', [
            { text: '暂不', onPress: () => console.log('cancel') },
            { text: '确认', onPress: () => console.log('ok') },
        ])
    }

    render () {
        return (
            <div className="modal-container">
                <Button type="primary" inline onClick={this.show}>打开Modal</Button>
                <Button type="primary" inline onClick={this.openAlert}>打开Alert</Button>
                <Modal
                    visible={this.state.visible}
                    maskCloseable={false}
                    onClose={this.hide}
                    title="Title"
                    footer={[{text: '确定', onPress: ()=>{
                            console.log('onPress ')
                            this.hide()
                        }}]}
                >
                    <div>
                        <h1>zhangyisdkkkk</h1>
                    </div>
                </Modal>
            </div>
        )
    }
}

