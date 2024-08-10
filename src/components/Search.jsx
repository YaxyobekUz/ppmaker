import React, { useState, useCallback } from "react";

// lodash
import { debounce } from "lodash";

// images
import searchIcon from "../assets/images/icons/search.svg";

const Search = ({ className = "", onChange = false }) => {
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);

  // set value
  const handleSearch = useCallback(
    debounce((value) => {
      onChange(value);
    }, 500),
    []
  );

  // handle change
  const handleChange = (e) => {
    if (onChange) {
      if (!loader) setLoader(true);
      handleSearch(e.target.value.trim().toLowerCase());
    }
    setQuery(e.target.value);
  };

  return (
    <div
      rel="search"
      className={`flex items-center grow relative ${className}`}
    >
      {/* search icon */}
      <img
        width={20}
        height={20}
        src={searchIcon}
        alt="ppmaker search icon"
        aria-label="ppmaker search icon"
        className="absolute left-3.5 size-6"
      />

      {/* search input */}
      <input
        name="search"
        type="search"
        value={query}
        title="search"
        onChange={handleChange}
        placeholder="Rasmlarni qidirish..."
        className="pl-12 outline-offset-0"
      />
    </div>
  );
};

export default Search;
