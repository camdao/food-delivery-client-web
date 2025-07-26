import { type ReactNode } from "react";

import { type IconComponentMap } from "../Icon";

export interface InputProps{
    placeholder?: string;
    value?: string;
    onChange?:(value: string) => void;
    maxLength?:number;
    bgColor?: string;
    name?:string;
    type?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    headerType?: 'icon'|'password'|'search';
};

export interface IconInputProps extends InputProps {
    headerType: 'icon';
    iconName?: keyof typeof IconComponentMap;
};

export interface PasswordInputProps extends InputProps {
    headerType: 'password';
};

export interface SearchInputProps extends InputProps {
    headerType: 'search';
    iconName?: keyof typeof IconComponentMap;
};


export type HeaderType = IconInputProps | PasswordInputProps|SearchInputProps;
