import * as React from "react";
import Popup from "../../components/Popup";
import Button from "../../components/Button";

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

    render () {
        return (
            <div className="modal-container">
                <Button type="primary" inline onClick={this.show}>打开Modal</Button>
                <Popup
                    visible={this.state.visible}
                    maskCloseable={false}
                    onClose={this.hide}
                    style={{
                        height: '300px',
                        background: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <div>
                        <h1>zhangyisdkkkk</h1>
                    </div>
                </Popup>
            </div>
        )
    }
}
