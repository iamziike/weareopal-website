import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const linksList = [
  { id: Math.random(), to: '/', title: 'Home' },
  { id: Math.random(), to: '/why', title: 'Why!' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const links = linksList.map((link) => (
    <li key={link.id} className={classes['nav__link']}>
      <NavLink to={link.to}>{link.title.toUpperCase()}</NavLink>
    </li>
  ));

  let navLinksCLassNames = classes['nav__links'];
  let navControlCLassNames = classes['nav__control'];
  if (isOpen) {
    navControlCLassNames += ` ${classes['nav__control--open']}`;
    navLinksCLassNames += ` ${classes['nav__links--open']}`;
  }

  return (
    <nav className={`${classes.nav}`}>
      <div className={classes['nav__logo-wrapper']}>
        <Logo />
      </div>
      <ul className={navLinksCLassNames}>{links}</ul>
      <div className={navControlCLassNames} onClick={clickHandler}></div>
    </nav>
  );
};

export default Navbar;
