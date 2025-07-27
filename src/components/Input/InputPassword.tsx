import { useState } from "react";

import { css } from "../../../styled-system/css";
import Icon from "../Icon";
import { type PasswordInputProps } from "./Input.types";
import InputBase from "./InputBase";


  
function InputPassword({...props }: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePassword = () => setShowPassword((prev) => !prev);


    return (
        <InputBase 
            type ={showPassword ? 'text' : 'password'} 
            rightIcon={
                <Icon name={'hidden'} width={20} height={20} className={iconCss} onClick={togglePassword }/>
            }
        {...props}
        />
    );
}

export default InputPassword;

const iconCss = css({
    cursor: 'pointer',
    paddingLeft: '3px',
    userSelect: 'none'
});
  