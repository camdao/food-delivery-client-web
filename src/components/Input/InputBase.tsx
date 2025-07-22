import {type ChangeEvent, type ReactNode} from 'react';

import { css, cx } from '../../../styled-system/css';

export interface InputProps{
  placeholder?: string;
  value?: string;
  onChange?:(value: string) => void;
  maxLength?:number;
  bgColor?: string;
  name?:string;
  type?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  headerType?: 'icon';
};

  
function InputBase({onChange,value, placeholder,bgColor,name,type = 'text',leftIcon,rightIcon,...props}: InputProps){
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (props.maxLength && inputValue.length > props.maxLength) {
            return;
        }

        onChange?.(inputValue);
    };
    
  return (
    <div>
        {name&& (
            <label className={subTitleCss}>
                {name}
            </label>
        )}
      
        <div className={cx(
        inputWrapperCss,
        css({ backgroundColor: bgColor })
        )}>
            {leftIcon && <div>{leftIcon}</div>}
            <input
                type={type}
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
            {rightIcon &&rightIcon}
        </div>
    </div>
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
  height:'36px',
  fontFamily:'sen'
});


const subTitleCss = css({
  fontSize:'13px',
  marginBottom: '4px',
  display: 'block',
  paddingLeft:'1px',
  fontFamily:'sen'
});

export default InputBase;