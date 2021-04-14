import * as React from 'react';

export interface ITagProps {
  /**
   * tag 类型
   **/
  type?: 'default' | 'primary';
  /**
   * 可选择tag类型
   */
  activeType?: 'default' | 'primary';
  /**
   * 尺寸
   */
  size?: 'md' | 'lg';
  /**
   * 是否可选中
   */
  checkable?: boolean;
  /**
   * 选中状态
   */
  checked?: boolean;
  /**
   * 是否默认选中
   */
  defaultChecked?: boolean;
  /**
   * 自定义选中字体颜色
   */
  activeColor?: string;
  /**
   * 自定义选中填充颜色
   */
  activeFill?: string;
  /**
   * 自定义字体颜色
   */
  color?: string;
  /**
   * 自定义填充颜色
   */
  fill?: string;
  /**
   * 传入的样式
   */
  style?: object;
  /**
   * 传入选中样式
   */
  activeStyle?: object;
  /**
   * 改变状态的回调函数
   */
  onChange?: (checked: boolean) => void;
  /**
   * 传入类名
   */
  className?: string;
  /**
   * 传入选中状态类名
   */
  activeClassName?: string;
  /**
   * 前缀
   */
  prefixCls?: string;
}

export interface ITagState {
  checked: boolean;
}
