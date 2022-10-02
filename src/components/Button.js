import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Button({ type, children }) {
  const commonStyle = () => {
    return 'w-44 h-11 sm:w-[228px] sm:h-14 rounded-[28px]';
  };
  const applyTypeStyle = () => {
    switch (type) {
      case 'primary':
        return 'bg-theme-black text-sm sm:text-base leading-7 text-theme-light-cream font-bold transition-all duration-500 hover:bg-theme-galactic-blue';
      case 'secondary':
        return '';
      default:
        break;
    }
  };
  return (
    <button className={classNames(commonStyle(), applyTypeStyle())}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Button;
