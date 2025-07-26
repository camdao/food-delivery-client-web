import { type HeaderType } from "./Input.types";
import InputIcon from "./InputIcon";
import InputPassword from "./InputPassword";

  
function Input({...props}: HeaderType){
  switch (props.headerType) {
    case 'icon':
      return (
        <InputIcon {...props}/>
      );
    case 'password':
      return (
        <InputPassword {...props}/>
      );
  }
}

export default Input;