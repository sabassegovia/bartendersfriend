import React from 'react';
import FilterSearch from '../src/components/filterSearch.js';
import SearchBar from '../src/components/searchBar.js'
const SearchPage = () => {
  return (
    <div id='confirmed'>
      {/**overall container for both search components*/}
      <h1>We are in the approved 21 y/o page</h1>
      <div>
        <SearchBar/>
        <FilterSearch />
      </div>
    </div>
  )
}

export default SearchPage;