import React from 'react';
import Logo from '../assets/logo.svg';
import Button from './Button';
function Navbar() {
  return (
    <section className="flex items-center justify-between h-12 px-4 sm:px-10 sm:pt-[34px] pt-4 mx-auto sm:h-16 max-w-[1110px] xl:px-0">
      <div className="w-12 h-12 sm:h-16 sm:w-16">
        <img src={Logo} alt="logo" className="w-12 h-12 sm:h-16 sm:w-16" />
      </div>
      <div>
        <Button type="primary">Free Consultation</Button>
      </div>
    </section>
  );
}

export default Navbar;
