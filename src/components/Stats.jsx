import React, { useContext } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalDrinkSharpIcon from "@material-ui/icons/LocalDrinkSharp";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import BatteryCharging90Icon from "@material-ui/icons/BatteryCharging90";
import EventIcon from "@material-ui/icons/Event";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

import AppContex from "../contex/AppContext";

const Stats = () => {
  const stats = useContext(AppContex).stats;

  return (
    <>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <div>
          <FavoriteIcon />
          <span>{stats.hp}</span>
        </div>

        <div>
          <LocalDrinkSharpIcon />
          <span>{stats.water}</span>
        </div>

        <div>
          <FastfoodIcon />
          <span>{stats.food}</span>
        </div>

        <div>
          <BatteryCharging90Icon />
          <span>{stats.energy}</span>
        </div>
        <EventIcon />
        <span>{stats.days}</span>
      </Grid>
    </>
  );
};

export default Stats;
