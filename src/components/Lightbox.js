import Image from "./Image.js";

const Lightbox = () => {
  const [slideIndex, setSlideIndex] = React.useState(1);
  const [modal, setModal] = React.useState('off');
  const data = [
    { id:1, src: './src/images/image-product-1-thumbnail.jpg', alt: 'product one', target:'./src/images/image-product-1.jpg' },
    { id:2, src: './src/images/image-product-2-thumbnail.jpg', alt: 'product two', target:'./src/images/image-product-2.jpg' },
    { id:3, src: './src/images/image-product-3-thumbnail.jpg', alt: 'product three', target:'./src/images/image-product-3.jpg' },
    { id:4, src: './src/images/image-product-4-thumbnail.jpg', alt: 'product four', target:'./src/images/image-product-4.jpg' },
  ];

  const Thumbnails = ({ props }) => {
    return props.map(item => <Image key={item.id} id={item.id} className='thumbnail' src={item.src} alt={item.alt} onClick={changeSlideIndex} />)
  };

  const MainImage = ({ props }) => {
    return props.map(item => item.id == slideIndex && <Image key={item.id} className='lightbox image' src={item.target} alt={item.alt} onClick={() => setModal('on')} />)
  };

  const changeSlideIndex = (event) => {
    return setSlideIndex(event.target.id)
  };

  const showPrevSlide = () => {
    slideIndex <= 1? setSlideIndex(4) : setSlideIndex(slideIndex - 1);
  };

  const showNextSlide = () => {
    slideIndex >= 4? setSlideIndex(1) : setSlideIndex(slideIndex + 1);
  };

  const DesktopSlideshow = () => (
    <div className='flex-col selectable'>
      <MainImage props={data} />
      <div className='thumbnails flex-row center'>
        <Thumbnails props={data} />
      </div>
    </div>
  );

  return (
    <>
      <DesktopSlideshow />
      {modal == 'on' && 
        <div className='slideshow-modal rel'>
          <Image className='close icon right selectable abs' src='./src/images/icon-close.svg' alt='close icon' onClick={() => setModal('off')} />
          <Image className='prev icon selectable abs' src='./src/images/icon-previous.svg' alt='previous icon' onClick={showPrevSlide} />
          <Image className='next icon selectable abs' src='./src/images/icon-next.svg' alt='next icon' onClick={showNextSlide} />
          <DesktopSlideshow />
        </div>
      }
    </>
  )
};

export default Lightbox;