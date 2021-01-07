import React from "react";
import { Grid, Typography } from "@material-ui/core";

const FeaturesSection = () => {

  return (
    <div className="second-section">
    <Grid container className="features-section">
      <Grid className="features" id="feature-one" item>
        <i className="fas fa-calendar-alt"></i>
        <Typography className="features-text" variant="h6">
          KNOW NEXT FIXTURES
        </Typography>
      </Grid>
      <Grid className="features" id="feature-two" item>
        <i className="fas fa-binoculars"></i>
        <Typography className="features-text" variant="h6">
          SCOUT FOR PLAYERS
        </Typography>
      </Grid>
      <Grid className="features" id="feature-three" item>
        <i className="fas fa-users"></i>
        <Typography className="features-text" variant="h6">
          WATCH FOR YOUR RANK
        </Typography>
      </Grid>
    </Grid>
    </div>
  );
};

export default FeaturesSection;
