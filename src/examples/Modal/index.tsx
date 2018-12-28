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
            visible: false,
            visible2: false
        }
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
                <Button
                    type="primary"
                    inline
                    onClick={()=>{ this.setState({ visible: true })}}>
                    打开primary按钮
                </Button>
                <Button
                    type="primary"
                    inline
                    onClick={()=>{ this.setState({ visible2: true })}}>
                    打开灰色按钮
                </Button>
                <Button type="primary" inline onClick={this.openAlert}>打开Alert</Button>
                <Modal
                    visible={this.state.visible}
                    maskCloseable={false}
                    onClose={()=>{ this.setState({ visible: false }) }}
                    title="默认按钮"
                    footer={[{text: '确定', onPress: ()=>{
                            console.log('onPress ')
                            this.setState({ visible: false })
                        }}]}
                >
                    <div>
                        <h1>primary按钮</h1>
                    </div>
                </Modal>
                <Modal
                    visible={this.state.visible2}
                    maskCloseable={false}
                    onClose={()=>{ this.setState({ visible2: false }) }}
                    title="灰色按钮"
                    footer={[{text: '确定', type: "default", onPress: ()=>{
                            console.log('onPress ')
                            this.setState({ visible2: false })
                        }}]}
                >
                    <div>
                        <h1>灰色按钮</h1>
                    </div>
                </Modal>
            </div>
        )
    }
}

