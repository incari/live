import React, { useContext } from "react";
import Stats from "../components/Stats";
import ElementContainer from "../components/ElementContainer";
import Actions from "../components/Actions";
import { Grid } from "@material-ui/core";
import Items from "../components/Items";

import { Actions as act } from "../api/Actions";
import { CampUpgrades } from "../api/CampUpgrades";
import { Food } from "../api/Food";
import { Other } from "../api/Other";
import AppContext from "../contex/AppContext";

const Game = () => {
  const { state } = useContext(AppContext);
  const backpack = state.backpack;

  let count = 0;
  backpack.forEach((item) => {
    count = count + item.qty;
  });

  return (
    <>
      <Stats />

      <Grid container spacing={3}>
        <ElementContainer title={"Actions"}>
          <Grid container direction="row" justify="center" alignItems="center">
            {act.map((action) => (
              <Actions props={action} key={action.name}></Actions>
            ))}
          </Grid>
        </ElementContainer>

        {/* Backpack start */}
        <Grid item md={3} xs={12}>
          <ElementContainer title={`Backpack ${count} /10`}>
            {backpack.map((backpack) => (
              <Items
                type={"backpack"}
                props={backpack}
                key={backpack.name}
              ></Items>
            ))}
          </ElementContainer>
        </Grid>
        {/* Backpack end */}

        <Grid item md={3} xs={12}>
          <ElementContainer title={"Camp Upgrades"}>
            {CampUpgrades.map((upgrades) => (
              <Items type={"Camp"} props={upgrades} key={upgrades.name}></Items>
            ))}
          </ElementContainer>
        </Grid>
        <Grid item md={3} xs={12}>
          <ElementContainer title={"Food and Water"}>
            {Food.map((food) => (
              <Items type={"Camp"} props={food} key={food.name}></Items>
            ))}
          </ElementContainer>
        </Grid>
        <Grid item md={3} xs={12}>
          <ElementContainer title={"Other"}>
            {Other.map((other) => (
              <Items type={"Camp"} props={other} key={other.name}></Items>
            ))}
          </ElementContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Game;
