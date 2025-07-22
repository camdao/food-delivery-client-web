import InputIcon, { type IconInputProps } from "./InputIcon";

export type HeaderType = IconInputProps;

  
function Input({...props}: HeaderType){
  switch (props.headerType) {
    case 'icon':
      return (
        <InputIcon {...props}/>
      );
  }
}

export default Input;