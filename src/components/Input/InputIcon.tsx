import { css } from "../../../styled-system/css";
import Icon, { type IconComponentMap } from "../Icon";
import InputBase, { type InputProps } from "./InputBase";

export interface IconInputProps extends InputProps {
    iconName: keyof typeof IconComponentMap;
    onChange?:(value: string) => void;
};

  
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
  