import classNames from 'classnames';
import React from 'react';

function Title({ type, content, styles }) {
  const commonStyle = () => {
    switch (type) {
      case 'primaryBlack':
        return 'text-theme-black';
      case 'secondaryBlack':
        return 'text-theme-medium-brown';
      case 'primaryWhite':
        return 'text-theme-light-cream';
      case 'secondaryWhite':
        return 'text-theme-light-cream';
      default:
        break;
    }
  };
  if (type === 'primaryBlack') {
    return <h1 className={classNames(commonStyle(), styles)}>{content}</h1>;
  }
  if (type === 'secondaryBlack' || 'secondaryWhite') {
    return <p className={classNames(commonStyle(), styles)}>{content}</p>;
  }
  if (type === 'primaryWhite') {
    return <h1 className={classNames(commonStyle(), styles)}>{content}</h1>;
  }
}

export default Title;
