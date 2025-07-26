import { css } from "../../../styled-system/css";
import Icon from "../Icon";
import { type SearchInputProps } from "./Input.types";
import InputBase from "./InputBase";


  
function InputSearch({ iconName = 'close', ...props }: SearchInputProps) {
    const onDelete = () => {
        props.onChange?.('');
    };

    const isDeleteButtonVisible = props.value && props.value.length > 0;

    return (
        <InputBase 
            bgColor={'#F6F6F6'}
            leftIcon={
                <Icon name={'search'} width={20} height={20} className={iconLeftCss}/>
            }
            rightIcon={
                isDeleteButtonVisible&&
                    <Icon name={iconName} width={20} height={20} className={iconCss} onClick={onDelete}/>
            }
        {...props}
            
        />
    );
}

export default InputSearch;

const iconCss = css({
    cursor: 'pointer',
});

const iconLeftCss = css({
    cursor: 'pointer',
    paddingRight:'5px'
});
