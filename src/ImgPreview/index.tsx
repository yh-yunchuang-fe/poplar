import * as React from "react";
import Dialog from "../Dialog";
import Icon from "../Icon";
import IImgPreviewProps from "./propsType";
import SwipeableViews from "react-swipeable-views";
import "./index.less"

export default class ImgPreview extends React.PureComponent<IImgPreviewProps, any> {

    public static defaultProps = {
        prefixCls: "yh-imgpreview",
        index: 0,
        deleteIcon: false,
        closeBtn: false,
        visible: false,
        onClose: () => {},
        onDelete: () => {},
        onChange: () => {}
    }

    private wrapper = document.getElementById("modal-root")

    constructor(props: IImgPreviewProps) {
        super(props)
        // this.state = {
        //     activeIndex: this.props.defaultIndex
        // }
    }

    componentDidUpdate (prevProps: IImgPreviewProps, prevState: any) {
        const props = this.props
        if (!!props.visible && !prevProps.visible) {
            this.wrapper.addEventListener("touchmove", this.touchMove, false)
        }

        if (!props.visible && !!prevProps.visible) {
            this.wrapper.removeEventListener("touchmove", this.touchMove, false)
        }
    }

    private touchMove = (event: any) => {
        // 判断默认行为是否可以被禁用
        if (event.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!event.defaultPrevented) {
                event.preventDefault()
            }
        }
    }

    private cancelBubble = (event: any) => {
        event.stopPropagation()
    }

    public render() {
        const { index, prefixCls, visible, deleteIcon, imgUrls, onClose, onDelete, onChange, closeBtn } = this.props

        const swipeSty = {
            height: "100%",
            width: "100%",
            // display: 'flex',
            // 'justify-content': 'center',
            // 'align-items': 'center'
        }

        const slideSty = {
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center'
        }

        return (
            <Dialog
                ref="dialog"
                visible={visible}
                className={`${prefixCls}`}
            >
                <div
                    className={`${prefixCls}-content`}
                    onClick={onClose}
                >
                    <div
                        className={`${prefixCls}-toolbar`}
                        onClick={this.cancelBubble}
                    >
                        {
                            closeBtn ? (
                                <span
                                    onClick={onClose}
                                    className={`${prefixCls}-close-btn`}
                                >关闭</span>
                            ) : null
                        }
                        <div className={`${prefixCls}-pagination`}>
                            <span>{index + 1}</span>
                            /
                            <span>{imgUrls.length}</span>
                        </div>
                        {
                            deleteIcon ? (
                                <div
                                    onClick={(e) => {
                                        onDelete(index, imgUrls)
                                        e.stopPropagation();
                                        return false;
                                    }}
                                    className={`${prefixCls}-delete-btn`}
                                >
                                    <Icon name="delete" />
                                </div>
                            ) : null
                        }
                    </div>

                    <SwipeableViews
                        index={index}
                        resistance
                        containerStyle={swipeSty}
                        style={swipeSty}
                        slideClassName="img-wrapper"
                        onChangeIndex={(activeIndex: number)=>{
                            onChange(activeIndex, imgUrls)
                        }}
                    >
                        {
                            imgUrls.map((cur, index)=>{
                                return (
                                    <img src={cur}  key={index}/>
                                )
                            })
                        }
                    </SwipeableViews>
                </div>
            </Dialog>
        )
    }

}
