import React, { useState } from "react";
import "./navbar.css";
import { useStateContext } from "../../context/StateContextProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const { setSearchInput, state } = useStateContext(search);

  const handleSearch = () => {
    setSearchInput(search);
  };
  const handleReset = () => {
    setSearch("");
    setSearchInput("");
  };
  return (
    <div className="nav">
      <Link className="link-title" to="/">
        PhoneReview
      </Link>
      <Link to="/favorites" className="favorites">
        Favorites{" "}
        <div className="total-favorites">{state.favorites.favItems.length}</div>
      </Link>
      <div className="wrapp-search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your phone"
        />
        {search ? (
          <p className="handleReset" onClick={handleReset}>
            X
          </p>
        ) : (
          ""
        )}
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
