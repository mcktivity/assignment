import React, { useState } from "react";
import ClearIcon from "./../../assets/cross.svg";
import SearchIcon from "./../../assets/magnifying-glass.svg";

export default () => {
  const [isTyping, setIsTyping] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleReset(e) {
    e.currentTarget.value = "";
    setIsTyping(false);
    // e.preventDefault();
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
