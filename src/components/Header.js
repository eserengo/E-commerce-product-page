import Image from './Image.js';
import NavWithModal from './NavWithModal.js';
import Cart from './Cart.js'

const Header = () => (
  <header className='header flex-row'>
    <div className='flex-row left'>
      <NavWithModal />
      <Image className='logo' src='./src/images/logo.svg' alt='logo' />
    </div>
    <div className='flex-row right selectable rel'>
      <Cart />
      <Image className='avatar' src='./src/images/image-avatar.png' alt='avatar' />
    </div>
  </header>
);

export default Header;