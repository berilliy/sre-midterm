import React from 'react'

export default function SearchBar() {

  function searchFunc() {
    const searchValue = document.querySelector('#searchBar').value;

    if (searchValue === '') {
      alert('Write the query.')
      return
    }

    window.location.href = `/search/${searchValue}`
    document.querySelector('#searchBar').value = ''
  }

  return (
    <div className="search-btn">
        <input type="text" id='searchBar' placeholder='Find album or artist...' />
        <button onClick={() => {searchFunc()}}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>
  )
}
