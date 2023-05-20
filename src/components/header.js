import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <h1>BuzzWavez</h1>
      <div>
        <input type="search"></input>
        <button type="submit">Search</button>
      </div>
      <hr/>
    </div>
  );
};

export default Header;
