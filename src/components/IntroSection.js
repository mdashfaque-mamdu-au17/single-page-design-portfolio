import React from 'react';
import Amy from '../assets/image-amy.webp';
import Button from './Button';
import Title from './Title';
function IntroSection() {
  return (
    <section className="pt-[100px] px-4 md:px-[39px] mx-auto flex flex-col sm:flex-none md:flex md:flex-row md:justify-between sm:relative gap-10 items-center sm:pt-[120px] xl:pt-[136px] max-w-[1110px] xl:px-0">
      <div className="h-[300px] w-[300px] md:h-[364px] md:w-[364px] sm:absolute sm:-left-[48px] md:static md:left-0 lg:w-[445px] lg:h-[445px]">
        <img
          src={Amy}
          alt="Amy"
          className="h-[300px] w-[300px] md:h-[364px] md:w-[364px] lg:w-[445px] lg:h-[445px]"
        />
      </div>
      <div className="sm:w-[339px] sm:absolute sm:right-10 md:static lg:w-[450px] xl:w-[540px]">
        <div className="text-center sm:text-left">
          <Title
            type="primaryBlack"
            content="I'm Amy, and I'd love to work on your next project"
            styles="text-[26px] leading-[33px] md:text-[32px] md:leading-[40px] font-bold"
          />
        </div>
        <div className="pt-6 text-center sm:text-left">
          <Title
            type="secondaryBlack"
            content="I love working with others to create beautiful design solutions. I've designed everything from brand illustrations to complete mobile apps. I'm also handy with a camera!"
            styles="text-base leading-[26px] font-medium md:text-lg md:leading-[28px]"
          />
        </div>
        <div className="pt-6 text-center sm:text-left">
          <Button type="secondary">Free Consultation</Button>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
