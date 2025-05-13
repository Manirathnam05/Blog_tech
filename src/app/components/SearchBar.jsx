'use client';

import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <Search
        placeholder="Search articles by title..."
        value={searchQuery}
        onChange={handleSearchChange}
        enterButton
        size="large"
        className="custom-search"
      />
    </div>
  );
};

export default SearchBar;
