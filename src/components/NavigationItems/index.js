import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationItems.css";
import { useSelector } from "react-redux";

const NavigationItems = (props) => {
  const info = useSelector((state) => state.login);

  return info && info.user && info.user.name ? (
    <>
      <li className="navigation-item">
        <NavLink to="/" exact onClick={props.onChoose}>
          Home
        </NavLink>
      </li>
      <li className="navigation-item" key="logout">
        <button onClick={props.onLogout}>Logout</button>
      </li>
    </>
  ) : (
    <li className="navigation-item">
      <NavLink to="/login" exact onClick={props.onChoose}>
        Login
      </NavLink>
    </li>
  );
};

export default NavigationItems;
