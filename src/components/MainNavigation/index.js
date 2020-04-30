import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItems from '../NavigationItems';

import './MainNavigation.css';

const MainNavigation = props => (
  <nav className="main-nav">
    <div className="main-nav__logo">
      <NavLink to="/">
        Star Wars
      </NavLink>
    </div>
    <div className="spacer" />
    <ul className="main-nav__items">
      <NavigationItems onLogout={props.onLogout} />
    </ul>
  </nav>
);

export default MainNavigation;
