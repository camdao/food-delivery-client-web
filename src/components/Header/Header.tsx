import { css } from "../../../styled-system/css";
import Icon, { type IconComponentMap } from "../Icon";

interface HeaderProps {
    title: string;
    iconNameLeft: keyof typeof IconComponentMap;
    iconNameRight: keyof typeof IconComponentMap;
};

function Header(props : HeaderProps) {
    return(
        <header className={wrapperCss}>
            <Icon name={props.iconNameLeft}/>
            {props.title}
            <Icon name={props.iconNameRight}/>
        </header>
    );
}
export default Header

const wrapperCss = css({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  alignItems: 'center',
  maxWidth: '327px',
  gap:'10px'
});
