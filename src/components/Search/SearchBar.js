import React, { useState } from "react";
import ClearIcon from "./../../assets/cross.svg";
import SearchIcon from "./../../assets/magnifying-glass.svg";

export default () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main>
      <form
        role="search"
        className="search-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          id="searchBar-id"
          className="searchBar-input"
          placeholder="Search"
        />
        <button type="button">
          <img src={SearchIcon} alt="search-icon" />
        </button>
      </form>
    </main>
  );
};
