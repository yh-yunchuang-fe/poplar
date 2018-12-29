import * as React from "react";
import Dialog from "../Dialog";
import Icon from "../Icon";
import IImgPreviewProps from "./propsType";
import SwipeableViews from "react-swipeable-views";
import "./index.less"

export default class ImgPreview extends React.PureComponent<IImgPreviewProps, any> {

    public static defaultProps = {
        prefixCls: "yh-imgpreview",
        defaultIndex: 0,
        deleteIcon: false,
        visible: false,
        onClose: () => {},
        onDelete: () => {}
    }

    private wrapper = document.getElementById("modal-root")

    constructor(props: IImgPreviewProps) {
        super(props)
        this.state = {
            activeIndex: this.props.defaultIndex
        }
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

    public render() {
        const { activeIndex } = this.state
        const { prefixCls, visible, deleteIcon, imgUrls, onClose, onDelete } = this.props

        const swipeSty = {
            height: "100%",
            width: "100%"
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
                    <div className="pagination">
                        <span className="current-page">{activeIndex + 1}</span>
                        /
                        <span className="total-page">{imgUrls.length}</span>
                    </div>

                    {!deleteIcon ? null
                        :<div className="btn-delete"
                              onClick={(e)=>{
                                  onDelete(this.state.activeIndex)
                                  e.stopPropagation();
                                  return false;
                              }}>
                            <Icon name="delete"/>
                        </div>
                    }


                    <SwipeableViews
                        index={activeIndex}
                        resistance
                        containerStyle={swipeSty}
                        style={swipeSty}
                        onChangeIndex={(activeIndex: number)=>{
                            this.setState({
                                activeIndex
                            })
                        }}
                    >
                        {
                            imgUrls.map((cur, index)=>{
                                return (
                                    <div className="img-wrapper" key={index}>
                                        <img src={cur}/>
                                    </div>
                                )
                            })
                        }
                    </SwipeableViews>
                </div>
            </Dialog>
        )
    }

}
