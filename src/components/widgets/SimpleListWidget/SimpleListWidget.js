import React from "react";
import PropTypes from "prop-types";
import Widget from "../../common/Widget/Widget";
import "./SimpleListWidget.css";

const SimpleListWidget = ({ url, title, items }) => (
  <Widget url={url} title={title} className="widget-simple-list col-4">
    <ul className="simple-list list-group list-group-vertical">
      {items.map((row, index) => (
        <li key={index} className="list-group-item border-0">
          {row.slice(0, 3).map((val, i) => (
            <span key={i} className={"list-col list-col-" + i}>{val}&nbsp;</span>
          ))}
        </li>
      ))}
    </ul>
  </Widget>
);

SimpleListWidget.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default SimpleListWidget;