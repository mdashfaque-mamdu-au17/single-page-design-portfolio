import classNames from 'classnames';
import React from 'react';

function SkillBox({ imageSrc, content, styles }) {
  return (
    <div className={classNames('relative h-full rounded-lg', styles)}>
      <img
        src={imageSrc}
        alt="graphic-design"
        className="absolute top-6 right-6"
      />
      <div className="absolute bottom-6 left-6">
        <h4 className="text-2xl font-bold leading-[30px] text-white">
          {content}
        </h4>
      </div>
    </div>
  );
}

export default SkillBox;
