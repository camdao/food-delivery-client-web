import { type SVGProps } from "react";

import MenuIcon from "./MenuIcon";

const IconComponentMap = {
    'menu': MenuIcon,
}
interface Props extends IconComponentProps{
    name: keyof typeof IconComponentMap;
}
interface IconComponentProps extends SVGProps<SVGSVGElement> {
    onClick?: () => void;
}
  
export default function Icon({ name, ...props }: Props) {
    const IconComponent = IconComponentMap[name];

    return <IconComponent {...props} />;
}