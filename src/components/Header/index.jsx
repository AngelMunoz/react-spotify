import React from "react";
import UserDetails from "../UserDetails/index.js";
import TrackSearch from "../TrackSearch/index.js";
import "./Header.css";

const Header = () => (
  <div className="header">
    <TrackSearch />
    <UserDetails />
  </div>
);


export default Header;
