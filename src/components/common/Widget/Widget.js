import React from "react";
import PropTypes from "prop-types";
import "./Widget.css";


const Widget = ({ title, url, children, className = "" }) => {
  const header = title && (
    <h1>
      <a href={url || "#"} rel="noreferrer">{title}</a>
    </h1>
  );

  return (
    <div className={`widget col ${className}`}>
      {header}{children}
    </div>
  );
};

Widget.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Widget;