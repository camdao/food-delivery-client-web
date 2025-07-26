import { type HeaderType } from "./Input.types";
import InputIcon from "./InputIcon";
import InputPassword from "./InputPassword";
import InputSearch from "./InputSearch";

  
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
    case 'search':
      return (
        <InputSearch {...props}/>
      );
  }
}

export default Input;