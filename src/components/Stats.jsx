import React, { useContext } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalDrinkSharpIcon from "@material-ui/icons/LocalDrinkSharp";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import BatteryCharging90Icon from "@material-ui/icons/BatteryCharging90";
import EventIcon from "@material-ui/icons/Event";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Grid from "@material-ui/core/Grid";

import AppContex from "../contex/AppContext";

const Stats = () => {
  const { state } = useContext(AppContex);
  const { stats } = state;
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <div>
          <FavoriteIcon />
          <span>{stats.hp}</span>
        </div>
        <div>
          <BatteryCharging90Icon />
          <span>{stats.energy}</span>
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
          <EventIcon />
          <span>{stats.days}</span>
        </div>
        <div>
          <AccessTimeIcon />
          <span>
            {stats.time >= 10 ? "" : "0"}
            {stats.time}:00
          </span>
        </div>
      </Grid>
    </>
  );
};

export default Stats;
