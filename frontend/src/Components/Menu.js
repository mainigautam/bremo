import React from "react";
import { Link } from "react-router-dom";
const Menu = ({ menuExpanded, id }) => {
  if (menuExpanded) {
    return (
      <div className="menuContainerExp">
        <Link to="/">
          <div className={id === '/' ? "menuItemSelectedExp" : "menuItemTabExp"}>
            <div className="menuItemExp">
              <i className="fas fa-sticky-note"></i>
              <div className="menuLabel">Notes</div>
            </div>
          </div>
        </Link>
        <Link to="/Reminders">
          <div className={id === '/Reminders' ? "menuItemSelectedExp" : "menuItemTabExp"}>
            <div className="menuItemExp">
              <i className="fas fa-bell"></i>
              <div className="menuLabel">Reminders</div>
            </div>
          </div>
        </Link>
        <Link to="/Linkpad">
          <div className={id === '/Linkpad' ? "menuItemSelectedExp" : "menuItemTabExp"}>
            <div className="menuItemExp">
              <i className="fas fa-link"></i>
              <div className="menuLabel">Linkpad</div>
            </div>
          </div>
        </Link>
        <Link to="/Archive">
          <div className={id === '/Archive' ? "menuItemSelectedExp" : "menuItemTabExp"}>
            <div className="menuItemExp">
              <i className="fas fa-archive"></i>
              <div className="menuLabel">Archive</div>
            </div>
          </div>
        </Link>
        <Link to="/Trash">
          <div className={id === '/Trash' ? "menuItemSelectedExp" : "menuItemTabExp"}>
            <div className="menuItemExp">
              <i className="fas fa-trash"></i>
              <div className="menuLabel">Trash</div>
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="menuContainer">
        <Link to="/">
          <div className={id === '/' ? "menuItemSelected" : "menuItemRing"}>
            <div className="menuItem">
              <i className="fas fa-sticky-note"></i>
            </div>
          </div>
        </Link>
        <Link to="/Reminders">
          <div className={id === '/Reminders' ? "menuItemSelected" : "menuItemRing"}>
            <div className="menuItem">
              <i className="fas fa-bell"></i>
            </div>
          </div>
        </Link>
        <Link to="/Linkpad">
          <div className={id === '/Linkpad' ? "menuItemSelected" : "menuItemRing"}>
            <div className="menuItem">
              <i className="fas fa-link"></i>
            </div>
          </div>
        </Link>
        <Link to="/Archive">
          <div className={id === '/Archive' ? "menuItemSelected" : "menuItemRing"}>
            <div className="menuItem">
              <i className="fas fa-archive"></i>
            </div>
          </div>
        </Link>
        <Link to="/Trash">
          <div className={id === '/Trash' ? "menuItemSelected" : "menuItemRing"}>
            <div className="menuItem">
              <i className="fas fa-trash"></i>
            </div>
          </div>
        </Link>
      </div>
    );
  }
};

export default Menu;
