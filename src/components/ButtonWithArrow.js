import React from 'react';

function ButtonWithArrow({ imageSrc, onClick, ...rest }) {
  return (
    <button
      className="flex items-center justify-center w-16 h-16 transition-all duration-500 rounded-full bg-theme-black hover:bg-theme-galactic-blue"
      onClick={onClick}
      {...rest}
    >
      <img src={imageSrc} alt="" />
    </button>
  );
}

export default ButtonWithArrow;
