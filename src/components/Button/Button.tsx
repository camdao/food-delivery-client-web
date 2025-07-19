import { cva } from "../../../styled-system/css";
import { styled } from "../../../styled-system/jsx";

const buttonStyle = cva({
    base: {
        display: 'block',
        borderRadius: '12px',
        height:'38px',
    },
    variants:{
        color:{
            orange:{
                color:'#FFFFFF',
                backgroundColor:'#FF7622'
            },
            white:{
                color:'#FF7622',
                backgroundColor:'#FFFFFF',
                border: '1px solid #FF7622'
            },
        },
        size: {
            large: {
              width: '100%',
              margin: '0 auto',
            },
            small: {
              width: '100%',
              maxWidth: '139px',
            }
          }
          
    }

})

const Button = styled('button', buttonStyle)
export default Button;