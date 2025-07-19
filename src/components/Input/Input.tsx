import { type ChangeEvent} from 'react';

import { css, cx } from '../../../styled-system/css';
import Icon from '../Icon';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?:(value: string) => void;
  maxLength?:number;
  bgColor?: string;
};

  
function Input({onChange,value, placeholder,bgColor,...props}: InputProps){

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
    <div className={cx(
      inputWrapperCss,
      css({ backgroundColor: bgColor })
    )}>
      <input
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
      {isDeleteButtonVisible && (
        <Icon name='close' className={iconCss} onClick={onDelete} />
      )}
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
});

const iconCss = css({
  cursor: 'pointer',
  paddingLeft: '3px',
});
export default Input;