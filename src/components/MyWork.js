import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Title from './Title';
import Image1 from '../assets/image-slide-1.jpg';
import Image2 from '../assets/image-slide-2.jpg';
import Image3 from '../assets/image-slide-3.jpg';
import Image4 from '../assets/image-slide-4.jpg';
import Image5 from '../assets/image-slide-5.jpg';
import CarouselItem from './CarouselItem';
import Right from '../assets/icon-arrow-right.svg';
import Left from '../assets/icon-arrow-left.svg';
import ButtonWithArrow from './ButtonWithArrow';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 641 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const previousButtonHandler = () => {
    return previous();
  };
  const nextButtonHanlder = () => {
    return next();
  };
  return (
    <div className="flex items-center justify-center gap-4 pt-8 sm:pt-14">
      <ButtonWithArrow imageSrc={Left} onClick={previousButtonHandler} />
      <ButtonWithArrow imageSrc={Right} onClick={nextButtonHanlder} />
    </div>
  );
};
function MyWork() {
  return (
    <section className="pt-[100px] sm:pt-[420px] md:pt-[120px] lg:pt-[88px] max-w-[1400px] mx-auto">
      <div className="text-center">
        <Title
          content="My Work"
          type="primaryBlack"
          styles="text-2xl leading-[30px] font-bold sm:text-[32px] sm:leading-[40px]"
        />
      </div>

      <div className="pt-8">
        <div></div>
        <Carousel
          responsive={responsive}
          renderButtonGroupOutside={true}
          arrows={false}
          centerMode={true}
          containerClass=""
          className=""
          itemClass=""
          infinite={true}
          customButtonGroup={<CustomButtonGroup />}
        >
          <CarouselItem imageSrc={Image1} />
          <CarouselItem imageSrc={Image2} />
          <CarouselItem imageSrc={Image3} />
          <CarouselItem imageSrc={Image4} />
          <CarouselItem imageSrc={Image5} />
        </Carousel>
      </div>
    </section>
  );
}

export default MyWork;
