import DisplayOnResize from './Display.js';
import { Context } from './Context.js';
import Image from './Image.js';
import Button from './Button.js';

const Cart = () => {
  const {quantity, setQuantity} = React.useContext(Context);
  const [modal, setModal] = React.useState('off');
  const price = 125.00;
  const Total = () => { return price * quantity };
  
  React.useEffect(() => {
    DisplayOnResize()
  }, []);

  return (
    <>
      <Image className='cart icon' src='./src/images/icon-cart.svg' alt='cart icon' onClick={() => setModal('on')} />
      <span className='notification abs'>{quantity}</span>
      {modal == 'on' && 
        <div className='cart-modal'>
          <div className='flex-row'>
            <strong className='left'>Cart</strong>
            <Image className='close icon selectable' src='./src/images/icon-close.svg' alt='close icon' onClick={() => setModal('off')} />
          </div>
          {quantity == 0 && <span className='cart-modal-message center'>Your cart is empty.</span>}
          {quantity > 0 &&
            <>
              <div className='flex-row center'>
                <Image className='cart-modal-image' src='./src/images/image-product-1-thumbnail.jpg' alt='product one thumbnail' />
                <div className='flex-col'>
                  <span className='cart-modal-product'>Fall Limited Edition Sneakers</span>
                  <br></br>
                  <span className='cart-modal-price'>$ {price} x {quantity} <strong>$ <Total /></strong></span>
                </div>
                <Image className='cart-modal-delete icon' src='./src/images/icon-delete.svg' alt='delete icon' onClick={() => setQuantity(0)} />
              </div>
              <Button buttonType='button' buttonClassName='secondary button selectable' buttonContent='Buy it!' />
            </>
          }
        </div>
      }
    </>
  );
}

export default Cart;