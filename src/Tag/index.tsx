/*
 * @Author: beilunyang
 * @Date: 2018-12-28 15:54:48
 * @Last Modified by: beilunyang
 * @Last Modified time: 2018-12-29 15:58:58
 */

import * as React from "react";
import classnames from "classnames";
import { ITagProps, ITagState } from "./propsType";
import "./styles/index.less";

const noop = () => {};

export default class Tag extends React.PureComponent<ITagProps, ITagState> {
    private static defaultProps = {
        prefixCls: 'yh-tag',
        type: 'default',
        size: 'md',
        checkable: false,
        defaultChecked: false,
        onChange: noop,
        style: {},
        activeStyle: {},
    };

    private static getDerivedStateFromProps(nextProps: ITagProps, prevState: ITagState) {
        if (!nextProps.checkable) {
            return null;
        }

        if (nextProps.hasOwnProperty('checked')) {
            // checked优先级高于defaultChecked,  当设置了checked时, defaultChecked设置无效
            if (prevState.checked === nextProps.checked) {
                return null;
            }
            return {
                checked: nextProps.checked,
            };
        }
        return null;
    };

    constructor(props: ITagProps) {
        super(props);
        this.state = {
            checked: props.checkable && (props.hasOwnProperty('defaultChecked') ? props.defaultChecked : props.checked),
        };
    }

    private onClick = () => {
        if (this.props.checkable) {
            if (this.props.hasOwnProperty('checked')) {
                this.props.onChange(!this.props.checked);
                return;
            }

            this.setState({
                checked: !this.state.checked,
            }, () => {
                this.props.onChange(this.state.checked);
            });
        }
    };

    public render() {
        const { checked } = this.state;
        const {
            prefixCls,
            children,
            type,
            size,
            checkable,
            color,
            fill,
            style,
            className,
            activeType,
            activeColor,
            activeFill,
            activeStyle,
            activeClassName,
        } = this.props;

        const tagType = checked ? activeType : type;

        let cls = classnames({
            [prefixCls]: true,
            [`${prefixCls}-checked`]: checked,
            [`${prefixCls}-${tagType}`]: tagType,
            [`${prefixCls}-size-${size}`]: size,
        });
        let sty = null;
        let borderColor = null;
        if (checkable && checked) {
            sty = {
                color: activeColor,
                backgroundColor: activeFill,
                ...activeStyle,
            };
            cls = classnames(cls, activeClassName);
            borderColor = activeColor;
        } else {
            sty = {
                color,
                backgroundColor: fill,
                ...style,
            };
            cls = classnames(cls, className);
            borderColor = color;
        }

        return (
            <div className={cls} style={sty} onClick={this.onClick}>
                <div className="border">
                    <div className="border-line" style={{ borderColor }}/>
                    {children}
                </div>
            </div>
        );
    }
}
