import React from "react";
import "./Search.css";
import SEARCH_LABELS from "./search.json";


const SEARCH_SAMPLE = "фаза луны сегодня";


const Search = () => (
  <div className="search-panel">
    <div className="logo">
      <a href="#" rel="noreferrer" title="Home">
        <div className="logo-img" style={{ "backgroundImage": `url(${SEARCH_LABELS.logo})` }}></div>
      </a>
    </div>
    <div className="search-control">
      <div className="input-group">
        <input type="text" className="form-control" />
        <button className="btn btn-info" type="button">{SEARCH_LABELS.button}</button>
      </div>
      <div className="search-sample">
        <span>{SEARCH_LABELS.sample}</span>
        &nbsp;
        <span className="search-sample-text">{SEARCH_SAMPLE}</span>
      </div>
    </div>
  </div>
);

export default Search;