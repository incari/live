import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalDrinkSharpIcon from "@material-ui/icons/LocalDrinkSharp";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import BatteryCharging90Icon from "@material-ui/icons/BatteryCharging90";
import EventIcon from "@material-ui/icons/Event";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

const Stats = () => {
  return (
    <>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <div>
          <FavoriteIcon />
          <span>100</span>
        </div>

        <div>
          <LocalDrinkSharpIcon />
          <span>100</span>
        </div>

        <div>
          <FastfoodIcon />
          <span>100</span>
        </div>

        <div>
          <BatteryCharging90Icon />
          <span>100</span>
        </div>
        <EventIcon />
        <span>101</span>

        <IconButton>
          <Brightness4Icon fontSize="small" />
        </IconButton>
      </Grid>
    </>
  );
};

export default Stats;
