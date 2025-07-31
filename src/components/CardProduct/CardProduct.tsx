import Image from 'next/image'

import { css } from "../../../styled-system/css";

interface Props{
    name?: string; 
    price?: number 
};

function CardProduct({ name , price}: Props){
  
  return (
    <div className={cardContainer}>
        <Image
            src="/images/categories.svg"
            width={122}
            height={104}
            alt="Picture of the author"
            className={imageBox}
        />
        <div className={whiteContainer}>
            <div className={detailContainer}>
                <h3 className={productName}>{name}</h3>
                <div className={productFooter}>
                    <span>Starting</span>
                    <span className={productPrice}>${price}</span>
                </div>
            </div>
        </div>
    </div>
  );
}
const detailContainer =css({
    position: 'absolute',
    zIndex: 1,
    top: '50px',
    width: '100%',
    padding:'0 5px',

})

const whiteContainer =css({
    width: '147px',
    height: '144px',
    background: '#FFFFFF',
    boxShadow: '12px 12px 30px rgba(150, 150, 154, 0.15)',
    borderRadius: '24px',
    top: '40px',
    position: 'absolute',
    zIndex: 1,

})
const productName = css({
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: '12px',
    marginBottom: '4px',
});


const productFooter = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
});
  
const imageBox = css({
    position: 'absolute',
    zIndex: 2,
});
const productPrice = css({
  
});
const cardContainer = css({
    width:'100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})
export default CardProduct;