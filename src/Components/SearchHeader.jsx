import React from "react";
import "./SearchHeader.css";

const SearchHeader = () => {
  return (
    <div className="searchheader">
      <div className="searchheader__leftside">
        <div className="searchheader__title">
          <p>
            1-16 of over 20,000 results for <strong>"gaming headsets"</strong>
          </p>
        </div>
      </div>
      <div className="searchheader__rightside">
          <button><small>Sort by: Featured</small></button>
      </div>
    </div>
  );
};

export default SearchHeader;
