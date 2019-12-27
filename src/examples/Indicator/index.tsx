import * as React from "react";
import Indicator from "../../components/Indicator";
import './index.less';

export default class IndicatorDemo extends React.Component<any, any> {
    render() {
        return (
            <div className="indicator-demo">
                <Indicator
                    size="sm"
                />
                <Indicator />
                <Indicator
                    size="lg"
                />
                <Indicator
                    color="orange"
                    size="xl"
                />
                <Indicator
                    color="gray"
                />
                <Indicator
                    color="white"
                    text="white loading..."
                />
                <Indicator
                    text="loading..."
                />
                <Indicator
                    size="lg"
                    className="indicator-demo-item"
                    textClassName="indicator-demo-item-text"
                />
                <Indicator
                    size="lg"
                    color="white"
                    text="加载中"
                    style={{
                        flexDirection: 'column',
                        '-webkit-flex-direction': 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#333',
                        borderRadius: '5px',
                    }}
                    textStyle={{
                        fontSize: '14px',
                        color: '#fff',
                        marginTop: '8px',
                        marginLeft: 0,
                    }}
                />
            </div>

        );
    }
}
