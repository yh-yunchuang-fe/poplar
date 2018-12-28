import * as React from "react"
import * as ReactCSSTransitionGroup from "react-addons-css-transition-group"
import {
    getChildrenFromProps,
    toArrayChildren
} from './utils'
import './index.less'
import IAnimationProps from "./propsType";

export default class Animation extends React.Component<IAnimationProps, any> {
    constructor(props:IAnimationProps) {
        super(props)
    }

    public static defaultProps = {
        component: 'span',
        transitionName: 'yh-zoom',
        transitionEnter: true,
        transitionAppear: true,
        transitionLeave: true,
        transitionEnterTimeout: 200,
        transitionAppearTimeout: 200,
        transitionLeaveTimeout: 200
    }

    public render() {
        let {
            children,
            ...other
        } = this.props
        let newChildren = toArrayChildren(getChildrenFromProps(children))
        // @ts-ignore
        let node = newChildren.map((child) => {
            if (child === null || child === undefined) {
                return child
            }
            if (!child.key) {
                throw new Error('must set key for <animation> children');
            }
            return child
        })
        return (
            <ReactCSSTransitionGroup
                {...other}
            >
                {node}
            </ReactCSSTransitionGroup>
        )
    }
}
