import { type HeaderType } from "./Input.types";
import InputIcon from "./InputIcon";

  
function Input({...props}: HeaderType){
  switch (props.headerType) {
    case 'icon':
      return (
        <InputIcon {...props}/>
      );
  }
}

export default Input;