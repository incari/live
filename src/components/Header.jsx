import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const Header = () => {
  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
      <h1>This is the Header</h1>
      <IconButton
        onClick={() => document.documentElement.classList.toggle("dark-mode")}
      >
        <Brightness4Icon fontSize="large" style={{ color: "white" }} />
      </IconButton>
    </Grid>
  );
};

export default Header;
