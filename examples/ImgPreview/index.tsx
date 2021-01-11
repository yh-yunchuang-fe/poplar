import * as React from "react";
import ImgPreview from "poplar/ImgPreview"
import Button from "poplar/Button"


export default class ImgPreviewDom extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            visible: false,
            index: 0,
            imgUrls: [
                "https://avatars3.githubusercontent.com/u/7664160?s=460&v=4",
                "https://avatars3.githubusercontent.com/u/7869311?s=460&v=4",
                "https://avatars0.githubusercontent.com/u/2757932?s=460&v=4",
                "https://i.loli.net/2019/03/12/5c877b5134c57.jpg",
            ]
        }
    }

    render() {
        const { index, visible, imgUrls } = this.state;
        return (
            <div>
                <Button
                    type="ghost"
                    onClick={()=>{ this.setState({ visible: true }) }}
                >
                    打开Dialog
                </Button>
                <ImgPreview
                    visible={visible}
                    imgUrls={imgUrls}
                    index={index}
                    deleteIcon={true}
                    closeBtn={true}
                    onChange={(index) => {
                        this.setState({ index })
                    }}
                    onClose={() => {
                        this.setState({ visible: false })
                    }}
                    onDelete={(deleteIndex) => {
                        const imgUrls = this.state.imgUrls
                        const arr = imgUrls.filter((item: string, index: number)=>{
                            if(deleteIndex !== index) return item;
                        })
                        this.setState({
                            imgUrls: arr,
                            index: 0
                        })
                    }}
                />
            </div>
        )
    }
}
