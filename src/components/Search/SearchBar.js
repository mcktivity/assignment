import React, { useState } from "react";
import ClearIcon from "./../../assets/cross.svg";
import SearchIcon from "./../../assets/magnifying-glass.svg";

export default () => {
  const [isTyping, setIsTyping] = useState(false);
  const [results, setResults] = useState([]);

  let timeoutSearch;
  let searchDelay = 500;

  function searchQuery(value) {
    const url = `http://localhost:4000/api/ships/${value}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response.statusText);
        }
      })
      .then((data) => {
        setResults(data);
        // console.log(data);
      });
  }

  function handleChange(e) {
    var value = e.currentTarget.value;
    clearTimeout(timeoutSearch);
    if (value.length > 0) {
      timeoutSearch = setTimeout(() => {
        searchQuery(value);
        setIsTyping(true);
      }, searchDelay);
    }
    return;
  }

  function handleBlur(e) {
    var value = e.currentTarget.value;
    if (value.length === 0) {
      setIsTyping(false);
    }
    return;
  }

  function handleSubmit(e) {
    /*  Exercise 3
        var value = document.getElementById("searchBar-id").value;
        searchQuery(value); 
    */
    // prevent refresh on Enter
    e.preventDefault();
  }

  function handleReset(e) {
    e.currentTarget.value = "";
    setResults([]);
    setIsTyping(false);
  }

  return (
    <main>
      <form
        role="search"
        className="search-form"
        onSubmit={(e) => handleSubmit(e)}
        onReset={(e) => handleReset(e)}
      >
        <input
          type="text"
          id="searchBar-id"
          name="searchBar"
          className="searchBar-input"
          placeholder="Search"
          autoFocus
          onBlur={(e) => handleBlur(e)}
          onChange={(e) => handleChange(e)}
        />
        {!isTyping ? (
          <button type="submit">
            <img src={SearchIcon} alt="search-icon" />
          </button>
        ) : (
          <button type="reset">
            <img src={ClearIcon} alt="clear-icon" />
          </button>
        )}
      </form>
      <ul className="results-list">
        {results.length > 0 &&
          results.map((data) => (
            <li key={data.id} className="results-item">
              {data.name}
            </li>
          ))}
      </ul>
    </main>
  );
};
