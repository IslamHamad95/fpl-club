import { Container, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import eplLogo from "../../storage/EPL-logo-white.png";

export  const comingSoon=()=>{
  alert("Coming Soon")
}
 function HomeSection() {
 
  return (
    <div>
    <Container className="home-section" maxWidth={false} disableGutters={true}>
      <header>
        <nav className="nav-bar">
          <NavLink onClick={comingSoon}  to="./">MY TEAM</NavLink>
          <NavLink onClick={comingSoon} to="./">FIXTURES</NavLink>
          <NavLink onClick={comingSoon} to="./">PLAYERS</NavLink>
          <NavLink onClick={comingSoon} to="./">GAMEWEEKS</NavLink>
        </nav>
      </header>
      <img id="epl-logo" src={eplLogo} alt="epl-logo"></img>
      <Typography id="web-name" variant="h2">
        FPL CLUB
      </Typography>
    </Container>
    </div>
  );
}

export default HomeSection;
