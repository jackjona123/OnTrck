import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../Utility/StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header_avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="Search something here" />
      </div>
      <div className="tooltip">&#9432; 
        <span class="tooltiptext">contact@jackjona.live</span>
      </div>
      <div class="tooltip">
        <span class="tooltiptext"></span>
      </div>
    </div>
  );
}

export default Header;
