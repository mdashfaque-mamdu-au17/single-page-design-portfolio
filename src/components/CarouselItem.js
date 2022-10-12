import React from 'react';

function CarouselItem({ imageSrc }) {
  return (
    <div className="w-[270px] h-[180px] rounded-[10px] sm:w-[540px] sm:h-[360px]">
      <img
        src={imageSrc}
        alt=""
        className="w-[270px] h-[180px] rounded-[10px] sm:w-[540px] sm:h-[360px]"
      />
    </div>
  );
}

export default CarouselItem;
