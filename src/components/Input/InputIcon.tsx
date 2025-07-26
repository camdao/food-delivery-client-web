import { css } from "../../../styled-system/css";
import Icon from "../Icon";
import { type IconInputProps } from "./Input.types";
import InputBase from "./InputBase";


  
function InputIcon({ iconName = 'close', ...props }: IconInputProps) {
    const onDelete = () => {
        props.onChange?.('');
    };

    const isDeleteButtonVisible = props.value && props.value.length > 0;

    return (
        <InputBase 
            rightIcon={
                isDeleteButtonVisible&&
                    <Icon name={iconName} width={20} height={20} className={iconCss} onClick={onDelete}/>
            }
        {...props}
            
        />
    );
}

export default InputIcon;

const iconCss = css({
    cursor: 'pointer',
    paddingLeft: '3px',
});
  