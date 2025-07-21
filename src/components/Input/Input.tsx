import { type ChangeEvent,useState} from 'react';

import { css, cx } from '../../../styled-system/css';
import Icon from '../Icon';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?:(value: string) => void;
  maxLength?:number;
  bgColor?: string;
  name:string;
  type?: 'text' | 'password';
};

  
function Input({onChange,value, placeholder,bgColor,type = 'text',...props}: InputProps){
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const isDeleteButtonVisible = value && value.length > 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (props.maxLength && inputValue.length > props.maxLength) {
      return;
    }

    onChange?.(inputValue);
  };

  const onDelete = () => {
    onChange?.('');
  };

  return (
    <>
      <label className={subTitleCss}>
        {props.name}
      </label>
      <div className={cx(
        inputWrapperCss,
        css({ backgroundColor: bgColor })
      )}>
        <input
            type={type === 'password' ? (showPassword ? 'text' : 'password') : 'text'}
          className={cx(
            inputCss,
            css({ backgroundColor: bgColor }) 
          )}
          required
          autoComplete="off"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {isDeleteButtonVisible && type === 'text'&& (
          <Icon name='close' className={iconCss} onClick={onDelete} />
        )}
        { type === 'password'&& (
          <Icon
            name='hidden' 
            className={iconCss}
            onClick={togglePassword}
          />
        )}
      </div>
    </>
  );
}

const inputWrapperCss = css({
  display: 'flex',
  alignItems:'center',
  width: '100%',
  justifyContent: 'space-between',
  padding: '12px 19px 14px',
  borderRadius: '10px',
  
})

const inputCss = css({
  flex: 1,
  _focus: { outline: 'none' },
  fontSize:'14px',
});

const iconCss = css({
  cursor: 'pointer',
  paddingLeft: '3px',
});

const subTitleCss = css({
  fontSize:'13px',
  marginBottom: '5px',
  display: 'block',
  paddingLeft:'1px'
});

export default Input;