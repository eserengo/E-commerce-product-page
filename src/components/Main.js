import MobileSlideshow from './Slideshow.js';
import Lightbox from './Lightbox.js';
import Heading from './Headings.js';
import Para from './Para.js';
import Order from './Order.js';

const Main = () => (
  <main className='main flex'>
    <section className='preview'>
      <div className='mobile'>
        <MobileSlideshow />
      </div>
      <div className='desktop'>
        <Lightbox />
      </div>
    </section>
    <section className='description'>
      <Para className='tag uppercase' content='Sneaker Company' />
      <Heading query='h1' className='primary title' content='Fall Limited Edition Sneakers' />
      <Para className='primary para' content='These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.' />
      <Heading query='h2' className='price title' content='$125.00' />
      <Para className='discount' content='50%' />
      <Para className='prevprice' content='$250.00' />
      <br></br>
      <Order />
    </section>
  </main>
);
  
export default Main;