import DisplayOnResize from './components/Display.js';
import {ContextProvider} from './components/Context.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Attribution from './components/Attribution.js';

window.addEventListener('resize', () => {
  let timer;
  window.clearTimeout(timer);
  timer = window.setTimeout(DisplayOnResize(), 500);
});

const App = () => {
  React.useEffect(() => {
    DisplayOnResize()
  }, []);

  return (
    <ContextProvider>
      <Header />
      <Main />
      <Attribution />
    </ContextProvider>
  )
};

document.querySelector('body').insertAdjacentHTML('afterbegin', `<div id='root' />`);
ReactDOM.createRoot(document.getElementById('root')).render(<App tab='home' />);
