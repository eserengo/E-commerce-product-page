import Image from './Image.js';

const MobileSlideshow = () => {
  const [slideIndex, setSlideIndex] = React.useState(1);
  const data = [
    { id: 1, src: './src/images/image-product-1.jpg', alt: 'product one' },
    { id: 2, src: './src/images/image-product-2.jpg', alt: 'product two' },
    { id: 3, src: './src/images/image-product-3.jpg', alt: 'product three' },
    { id: 4, src: './src/images/image-product-4.jpg', alt: 'product four' },
  ];

  const MainImage = ({ props }) => {
    return props.map(item => item.id == slideIndex && <Image key={item.id} className='slideshow image' src={item.src} alt={item.alt} />)
  };

  const showPrevSlide = () => {
    slideIndex <= 1? setSlideIndex(4) : setSlideIndex(slideIndex - 1);
  };

  const showNextSlide = () => {
    slideIndex >= 4? setSlideIndex(1) : setSlideIndex(slideIndex + 1);
  };

  return (
    <>
      <MainImage props={data} />
      <Image className='prev icon left selectable' src='./src/images/icon-previous.svg' alt='previous icon' onClick={showPrevSlide} />
      <Image className='next icon right selectable' src='./src/images/icon-next.svg' alt='next icon' onClick={showNextSlide} />
    </>
  )
};

export default MobileSlideshow;