import React, { useContext, useState } from "react";
import { Grid, IconButton } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const Header = () => {
  const [darkmode, setDarkmode] = useState("white");

  const handleDarkmode = (event) => {
    event.preventDefault();
    document.documentElement.classList.toggle("dark-mode");
    console.log("pls");
    // darkmode === "white" ? setDarkmode("black") : setDarkmode("white");
  };

  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
      <h1>This is the Header</h1>
      <IconButton onClick={handleDarkmode}>
        <Brightness4Icon fontSize="large" style={{ color: darkmode }} />
      </IconButton>
    </Grid>
  );
};

export default Header;
