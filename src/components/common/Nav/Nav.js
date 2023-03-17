import React from "react";
import PropTypes from "prop-types";


const NavItem = ({ id, active = false, className = "", children }) => (
  <li className={`nav-item ${className} ${active ? "active" : ""}`}>
    <span className="nav-link" data-id={id}>{children}</span>
  </li>
);
NavItem.propTypes = {
  id: PropTypes.string.isRequired,
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};


const Nav = ({ onSelect, className = "", children }) => (
  <ul className={`nav nav-pills ${className}`} onClick={onSelect}>
    {children}
  </ul>
);
Nav.propTypes = {
  onSelect: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
};

export { Nav as default, NavItem };