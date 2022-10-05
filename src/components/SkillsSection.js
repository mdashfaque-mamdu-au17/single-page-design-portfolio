import React from 'react';
import Title from './Title';

function SkillsSection() {
  return (
    <section>
      <div className="pt-8 text-center sm:pt-16 lg:[66px]">
        <Title
          content="Design solutions made easy"
          type="primaryBlack"
          styles="text-4xl leading-[45px] font-bold sm:text-[44px] sm:leading-[55px] lg:text-[56px] lg:leading-[71px]"
        />
        <div className="px-[45px] sm:w-[573px] lg:w-[730px] sm:px-0 mx-auto pt-4 sm:pt-[27px]lg:pt-[23px]">
          <Title
            content="With over ten years of experience in various design disciplines, I'm your one-stop shop for your design needs."
            type="secondaryBlack"
            styles="text-base leading-[26px] font-medium sm:text-lg sm:leading-[28px]"
          />
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
