import * as React from "react";
import './index.less'
import lottie from 'lottie-web'
import dataJson from "./data"
interface AppProps {
    showLoading: boolean
}

interface AppState {
}

export default class YHGloabelLoading extends React.PureComponent<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props)
        this.state = {
        }
    }
    animation: any = null
    loadingAnimation: any = React.createRef()
    componentDidMount() {
      this.animation = lottie.loadAnimation({
        container: this.loadingAnimation.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData:dataJson,
    })  
    }
    
    render() {
        const { showLoading } = this.props
        return (
            <>
            {
                showLoading && 
                <div>
                    <div className="loading-mask" ></div>
                    <div className="loading-wrapper" ref={this.loadingAnimation}>
                    </div>
                </div>
            }
            </>
            
        )
    }


}
