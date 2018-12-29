/*
 * @Author: beilunyang
 * @Date: 2018-12-28 15:54:44
 * @Last Modified by: beilunyang
 * @Last Modified time: 2018-12-28 17:08:18
 */
import * as React from "react";

export interface ITagProps {
    prefixCls?: string;
    type?: 'default' | 'primary';
    activeType?: 'default' | 'primary';
    size?: 'md' | 'lg';
    checkable?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    activeColor?: string;
    activeFill?: string;
    color?: string;
    fill?: string;
    onChange?: (checked: boolean) => void;
    style?: object;
    activeStyle?: object;
    className?: string;
    activeClassName?: string;
}

export interface ITagState {
    checked: boolean;
}
