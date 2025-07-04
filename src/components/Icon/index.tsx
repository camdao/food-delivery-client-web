import { type SVGProps } from "react";

import CardIcon from "./CardIcon";
import MenuIcon from "./MenuIcon";

export const IconComponentMap = {
    'menu': MenuIcon,
    'card': CardIcon
}
interface Props extends IconComponentProps{
    name: keyof typeof IconComponentMap;
}
interface IconComponentProps extends SVGProps<SVGSVGElement> {
    onClick?: () => void;
}
  
export default function Icon({name}: Props) {
    const IconComponent = IconComponentMap[name];

    return <IconComponent/>;
}