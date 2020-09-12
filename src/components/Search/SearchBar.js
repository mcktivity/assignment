import React, { useState } from "react";
import ClearIcon from "./../../assets/cross.svg";
import SearchIcon from "./../../assets/magnifying-glass.svg";

export default () => {
  const [isTyping, setIsTyping] = useState(false);
  const [results, setResults] = useState([]);

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
        console.log(data);
      });
  }

  function handleSubmit(e) {
    var value = document.getElementById("searchBar-id").value;
    searchQuery(value);
    e.preventDefault();
  }

  function handleReset(e) {
    e.currentTarget.value = "";
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
          className="searchBar-input"
          placeholder="Search"
          onChange={() => setIsTyping(true)}
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
    </main>
  );
};
