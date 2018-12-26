import ButtonProps from "./propsType";

import classNames from "classnames";
import * as React from "react";

import './index.less';

export default class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    // activeStyle: {},
    className: "",
    disabled: false,
    inline: false,
    // loading: false,
    onClick: (x?: any) => {},
    prefixCls: "yh-button",
    // onPressIn: (x?: any) => {},
    // onPressOut: (x?: any) => {},
    size: "default",
    style: {},
    // textStyle: {},
    type: "default",
  };
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
        pressIn: false,
        touchIt: false,
    };
  }
  public render() {
    const {
      children, prefixCls, className, type, size, inline, plain, round,
      disabled, onClick, ...restProps
    } = this.props;
    const wrapCls = {
      [className]: className,
      [prefixCls]: true,
      [`${prefixCls}-primary`]: type === "primary",
      [`${prefixCls}-plain`]: plain,
      [`${prefixCls}-round`]: round,
      [`${prefixCls}-warning`]: type === "warning",
      [`${prefixCls}-small`]: size === "small",
      [`${prefixCls}-mini`]: size === "mini",
      [`${prefixCls}-large`]: size === "large",
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-disabled`]: disabled,
    };
    return (
      <a
        // onTouchStart={()=>{}}
        role="button"
        className={classNames(wrapCls)}
        onClick={disabled ? undefined : onClick}
        aria-disabled={disabled}
        {...restProps}
      >
        <span>
        {children}
        </span>
      </a>
  );
  }
  // private onPressIn = (...args: any[]) => {
  //   this.setState({pressIn: true});
  //   if (this.props.onPressIn) {
  //       (this.props.onPressIn as any)(...args);
  //   }
  // }
  // private onPressOut = (...args: any[]) => {
  //   this.setState({pressIn: false});
  //   if (this.props.onPressOut) {
  //       (this.props.onPressOut as any)(...args);
  //   }
  // }

}
