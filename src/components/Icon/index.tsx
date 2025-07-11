import { type SVGProps } from "react";

import CardIcon from "./CardIcon";
import CloseIcon from "./CloseIcon";
import MenuIcon from "./MenuIcon";

export const IconComponentMap = {
    'menu': MenuIcon,
    'card': CardIcon,
    'close': CloseIcon

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