import { type ChangeEvent} from 'react';

import { css } from '../../../styled-system/css';
import Icon from '../Icon';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?:(value: string) => void;
  maxLength?:number;
};

  
function Input({
    onChange,
    value, 
    placeholder,
    ...props
  }: InputProps){
  
  const isDeleteButtonVisible = value && value.length > 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (props.maxLength && inputValue.length > props.maxLength) {
      return;
    }

    onChange?.(inputValue);
  };

  return (
    <div className={inputWrapperCss}>
      <input
        className={inputCss}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {isDeleteButtonVisible && (
        <Icon name='close' />
      )}
    </div>
  );
}

const inputWrapperCss = css({
  display: 'flex',
  alignItems:'center',
  backgroundColor: '#F6F6F6',
  width: '100%',
  justifyContent: 'space-between',
  padding: '12px 7px 14px',
  borderRadius: '10px',
})

const inputCss = css({
  flex: 1,
  _focus: { outline: 'none' },
  backgroundColor: '#F6F6F6',
});


export default Input;