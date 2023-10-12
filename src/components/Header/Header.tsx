import { useState } from 'react';
import classNames from "classnames";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from "react-icons/ai";
import { Fade } from 'react-awesome-reveal';

import { Languages } from './Languages';
import { Menu } from './Menu';
import { OrderButton } from './OrderButton';
import { logoSrc } from '../../utils/variables';
import './header.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='header'>
      <Link 
        className="header__logo" 
        to="/"
        onClick={() => setIsMenuOpen(false)}
      >
        <Fade direction='left' triggerOnce>
          <img src={logoSrc} width="150" alt="Logo" />
        </Fade>
      </Link>

      <Menu
        isMenuOpen={isMenuOpen}
        onMenuHide={() => setIsMenuOpen(prev => !prev)}
      />

      <div className="header__languages-and-order">
        <Languages />

        <OrderButton isMenuOpen={isMenuOpen} />

        <div
          onClick={() => setIsMenuOpen(prev => !prev)}
          className={classNames('menu__icons', {
            'is-icons-active': isMenuOpen,
          })}
        >
          {isMenuOpen
            ? <AiOutlineClose />
            : <GiHamburgerMenu /> }
        </div>
      </div>
    </header>
  );
};
