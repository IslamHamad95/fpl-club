import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {comingSoon} from "./HomeSection"
import eplLogo from "../../storage/EPL-logo-white.png";
function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const wrapperRef = useRef(0);

  const displaySideBar = () => {
    setSidebar((sidebar) => (sidebar = !sidebar));
  };

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        displaySideBar();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <div>
      <div className="side-bar">
        {!sidebar ? (
          <span className="hamburger" onClick={displaySideBar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </span>
        ) : null}
        {sidebar ? (
          <nav
            style={sidebar ? { width: "35vh" } : { width: "0" }}
            ref={wrapperRef}
            className="navbar"
          >
            <img src={eplLogo} alt="" />
            <ul className="nav-tabs">
              <li>
                <NavLink to="/" onClick={displaySideBar}>
                  MY TEAM
                </NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={displaySideBar}>
                  FIXTURES
                </NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={displaySideBar}>
                  PLAYERS
                </NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={displaySideBar}>GAMEWEEKS</NavLink>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  );
}

export default SideBar;
