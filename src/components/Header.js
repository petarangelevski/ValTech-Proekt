import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {


  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/album`; 
    navigate(path);
  }
  return (
    <div className="header">
      <div className="header__logo__container">
        <div className="header__logo" />
      </div>
      <div className="header__button__container">
        <button className="header__button" onClick={routeChange}>
          <p className="header__button__text">my albums</p>
        </button>
      </div>
    </div>
  );
}

export default Header;
