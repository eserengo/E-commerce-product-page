import { Context } from './Context.js';
import Image from './Image.js';
import Button from './Button.js';

const Order = () => {
  const {quantity, setQuantity} = React.useContext(Context);
  const [item, setItem] = React.useState(0);

  const removeItem = () => {
    item > 0 ? setItem(item - 1) : null;
  };

  const addItem = () => {
    item < 10 ? setItem(item + 1) : null;
  };

  return (
    <>
      <div className='quantifier flex-row'>
        <Image className='minus icon selectable' src='./src/images/icon-minus.svg' alt='minus icon' onClick={removeItem} />
        {item}
        <Image className='plus icon selectable' src='./src/images/icon-plus.svg' alt='plus icon' onClick={addItem} />
      </div>
      <Button buttonOnClick={() => setQuantity(item)} buttonType='button' buttonClassName='primary button selectable flex-row center' imageClassName='cart' imageSrc='./src/images/icon-cart.svg' imageAlt='cart icon' buttonContent='Add to cart' />
    </>
  )
};

export default Order;