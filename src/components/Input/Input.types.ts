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
    headerType?: 'icon';
};

export interface IconInputProps extends InputProps {
    iconName: keyof typeof IconComponentMap;
};


export type HeaderType = IconInputProps;
