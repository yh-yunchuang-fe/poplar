import * as React from "react";
import ImgPreview from "../../components/ImgPreview"
import Button from "../../components/Button"


export default class ImgPreviewDom extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <div>
                <Button
                    type="ghost"
                    onClick={()=>{ this.setState({ visible: true }) }}
                >
                    打开Dialog
                </Button>
                <ImgPreview
                    visible={this.state.visible}
                    imgUrls={[
                        "https://avatars3.githubusercontent.com/u/7664160?s=460&v=4",
                        "https://avatars3.githubusercontent.com/u/7869311?s=460&v=4",
                        "https://avatars0.githubusercontent.com/u/2757932?s=460&v=4"
                    ]}
                    onClose={() => {
                        this.setState({ visible: false })
                    }}
                />
            </div>
        )
    }
}
