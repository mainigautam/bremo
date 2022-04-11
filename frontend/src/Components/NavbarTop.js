import React, { useState } from "react";
import Logo from "../bremo-logo.png";
import SaveLoader from './SaveLoader'
const NavbarTop = ({ menu, headerName ,loading}) => {
  const [auth, setAuth] = useState(true);
  return (
    <div className="NavTop-Container">
      <div className="NavTop-Label">
        <div className="menuIconRing" onClick={menu}>
          <div className="menuIcon" >
            <i className="fa fa-1x fa-bars"></i>
          </div>
        </div>
        <img src={Logo} alt="" className="NavTop-Logo" />
        <div className="NavTop-LabelText">{headerName === "" ? "Bremo" : headerName}</div>
      </div>
      <div className="NavTop-SearchHolder">
          <div className="searchIcon">
            <i className="fas fa-search"></i>
          </div>
          <input type="search" placeholder="Search" className="NavTop-SearchBar" />
      </div>
      <div className="NavTop-Right">
        <SaveLoader loading={loading}/>
        {auth ? (
          <div className="profileInitial">G</div>
        ) : (
            <div>
              <button
                onClick={(e) => {
                  setAuth(true);
                }}
              >
                Login
            </button>
            </div>
          )}
      </div>
    </div>
  );
};
export default NavbarTop;
