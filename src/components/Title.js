import classNames from 'classnames';
import React from 'react';

function Title({ type, content, styles }) {
  const commonStyle = () => {
    switch (type) {
      case 'primaryBlack':
        return 'text-theme-black';
      case 'secondaryBlack':
        return 'text-theme-medium-brown';
      default:
        break;
    }
  };
  if (type === 'primaryBlack') {
    return <h1 className={classNames(commonStyle, styles)}>{content}</h1>;
  }
  if (type === 'secondaryBlack') {
    return <p className={classNames(commonStyle(), styles)}>{content}</p>;
  }
}

export default Title;
