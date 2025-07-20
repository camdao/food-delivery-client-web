import { type SVGProps } from "react";

import AppleIcon from "./AppleIcon";
import CardIcon from "./CardIcon";
import CloseIcon from "./CloseIcon";
import FacebookIcon from "./FacebookIcon";
import MenuIcon from "./MenuIcon";
import TwitterIcon from "./TwitterIcon";

export const IconComponentMap = {
    'menu': MenuIcon,
    'card': CardIcon,
    'close': CloseIcon,
    'facebook': FacebookIcon,
    'twitter': TwitterIcon,
    'apple': AppleIcon,

}
interface Props extends IconComponentProps{
    name: keyof typeof IconComponentMap;
}
export interface IconComponentProps extends SVGProps<SVGSVGElement> {
    onClick?: () => void;
}
  
export default function Icon({ name, ...props }: Props) {
    const IconComponent = IconComponentMap[name];
  
    return <IconComponent {...props} />;
}