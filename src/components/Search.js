import React from 'react';

function Search({setLoc}) {
  return (
    <div className='container'>
      <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" />
          <label htmlFor="last_name">Search City Name</label>
      </div>
    </div>
  );
}

export default Search;