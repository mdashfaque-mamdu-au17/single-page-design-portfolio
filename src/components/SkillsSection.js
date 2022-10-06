import React from 'react';
import SkillBox from './SkillBox';
import Title from './Title';
import GraphicDesign from '../assets/pattern-graphic-design.svg';
import UIUX from '../assets/pattern-ui-ux.svg';
import Apps from '../assets/pattern-apps.svg';
import Illustrations from '../assets/pattern-illustrations.svg';
import Photography from '../assets/pattern-photography.svg';
import MotionGraphics from '../assets/pattern-motion-graphics.svg';

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

      <div className="px-4 sm:px-[39px] pt-8 sm:pt-16 lg:pt-20 max-w-[1110px] mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 xl:px-0">
        <div className="h-[364px]">
          <SkillBox
            imageSrc={GraphicDesign}
            content="Graphic Design"
            styles="bg-theme-galactic-blue"
          />
        </div>
        <div className="pt-6 sm:pt-0 sm:flex sm:flex-col sm:gap-6">
          <div className="grid grid-cols-2 gap-x-[25px] sm:gap-x-[23px] lg:gap-x-[25px]">
            <div className="h-[182px]">
              <SkillBox
                imageSrc={UIUX}
                content="UI/UX"
                styles="bg-theme-summer-yellow"
              />
            </div>
            <div className="h-[182px]">
              <SkillBox imageSrc={Apps} content="Apps" styles="bg-theme-pink" />
            </div>
          </div>
          <div className="h-[158px] pt-6 sm:pt-0">
            <SkillBox
              imageSrc={Illustrations}
              content="Illustrations"
              styles="bg-theme-light-red"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 pt-6 gap-y-6 sm:col-span-2 sm:grid-cols-2 sm:gap-y-0 sm:gap-x-6 lg:grid-cols-1 lg:gap-y-6 lg:gap-x-0 lg:pt-0 lg:col-span-1">
          <div className="h-[182px]">
            <SkillBox
              imageSrc={Photography}
              content="Photography"
              styles="bg-theme-cyan"
            />
          </div>
          <div className="h-[182px] lg:h-[158px]">
            <SkillBox
              imageSrc={MotionGraphics}
              content="Motion Graphics"
              styles="bg-theme-dark-purple"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
