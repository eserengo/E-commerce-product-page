import DisplayOnResize from './Display.js';
import Image from './Image.js';

const NavWithModal = () => {
  const [state, setState] = React.useState('off');
  const data = [
    { id: 1, text: 'Collections' },
    { id: 2, text: 'Men' },
    { id: 3, text: 'Women' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];
  
  const List = ({props}) => {
    return props.map(item => <li key={item.id}>{item.text}</li>)
  }

  React.useEffect(() => {
    DisplayOnResize()
  }, []);

  return (
    <nav className='nav'>
      {state == 'off' && <Image className='menu icon mobile selectable' src='./src/images/icon-menu.svg' alt='menu icon' onClick={() => setState('on')} />}
      {state == 'on' && 
        <div className='menu-modal-bg mobile'>
          <div className='menu-modal'>
            <Image className='close icon selectable' src='./src/images/icon-close.svg' alt='close icon' onClick={() => setState('off')} />
            <ul className='flex-col selectable'>
              <List props={data} />
            </ul>
          </div>
        </div>
      }
      <ul className='flex-row center desktop selectable'>
        <List props={data} />
      </ul>
    </nav>
  )
}

export default NavWithModal;