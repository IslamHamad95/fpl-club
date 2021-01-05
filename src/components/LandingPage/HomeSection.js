import { Container, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import eplLogo from "../../storage/EPL-logo-white.png";

function HomeSection() {
  return (
    <Container className="home-section" maxWidth={false} disableGutters={true}>
      <header>
        <nav className="nav-bar">
          <NavLink  to="./">MY TEAM</NavLink>
          <NavLink  to="./">FIXTURES</NavLink>
          <NavLink  to="./">PLAYERS</NavLink>
          <NavLink  to="./">GAMEWEEKS</NavLink>
        </nav>
      </header>
      <img src={eplLogo} alt="epl-logo"></img>
      <Typography id="web-name" variant="h2">
        {" "}
        FPL CLUB
      </Typography>
    </Container>
  );
}

export default HomeSection;
