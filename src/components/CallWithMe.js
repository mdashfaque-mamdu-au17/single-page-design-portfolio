import React from 'react';
import Button from './Button';
import Title from './Title';

function CallWithMe() {
  return (
    <section className="mt-[100px] pl-[15px] pr-[17px] sm:pr-[39px] sm:pl-[39px] max-w-[1110px] xl:pr-0 xl:pl-0 mx-auto">
      <div className="bg-theme-black rounded-[10px] lg:relative lg:pl-[65px]">
        <div className="sm:w-[540px] mx-auto lg:mx-0 lg:m-none">
          <div className="text-center pt-[49px] sm:pt-[56px] lg:pt-[81px] lg:text-left">
            <Title
              content="Book a call with me"
              type="primaryWhite"
              styles="text-[26px] leading-[33px] font-bold sm:text-[32px] sm:leading-[40px] lg:text-[40px] lg:leading-[50px]"
            />
          </div>
          <div className="px-6 pt-6 sm:pt-[26px] lg:pt-[25px] sm:px-0 text-center lg:text-left lg:pb-20">
            <Title
              content="I'd love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there."
              type="secondaryWhite"
              styles="text-base leading-[26px] font-medium sm:text-lg sm:leading-[28px]"
            />
          </div>
          <div className="pt-6 sm:pt-[26px] pb-12 text-center sm:pb-[64px] lg:hidden">
            <Button type="secondary">Free Consultation</Button>
          </div>
        </div>

        <div className="hidden lg:block lg:absolute lg:top-1/2 lg:right-[95px] lg:transform lg:-translate-y-1/2">
          <Button type="secondary">Free Consultation</Button>
        </div>
      </div>
    </section>
  );
}

export default CallWithMe;
