import React, { useState } from 'react';

function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className={`search-bar ${isSearchOpen ? 'active' : ''}`}>
      <div className="search-icon" onClick={toggleSearch}>
        <img
          className={`search-icon-image ${isSearchOpen ? 'active' : ''}`}
          src="/images/search-2-line.png" // Update the path to your custom image
          alt=""
          aria-hidden="true"
        />
      </div>
      {isSearchOpen && (
        <input
          type="text"
          placeholder="Search..."
          className="search-input rounded bg-slate-200 text-[14px]"
        />
      )}
    </div>
  );
}

export default SearchBar;

