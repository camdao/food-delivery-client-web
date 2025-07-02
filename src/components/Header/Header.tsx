import { css } from "../../../styled-system/css";
import Icon, { IconComponentMap } from "../Icon";

interface headerProps{
    title:string;
    iconNameLeft: keyof typeof IconComponentMap;
    iconNameRight: keyof typeof IconComponentMap;
};

function Header(props : headerProps) {
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

const titleLabelCss = css({
    fontSize: '12px',
    color: '#FC6E2A',
    fontWeight: 'bold',
    fontFamily: 'Sen',
});
  
const titleValueCss = css({
    fontSize: '14px',
    color: '#676767',
    fontFamily: 'Sen',
});
  