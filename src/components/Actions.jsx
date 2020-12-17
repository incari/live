import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import AppContext from "../contex/AppContext";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

const Actions = ({ props }) => {
  const { state, UseAction } = useContext(AppContext);
  const classes = useStyles();
  const actions = props;

  const handleAction = () => {
    UseAction(actions);
  };
  return (
    <Box mx={3}>
      <Card className={classes.root}>
        <CardActionArea onClick={handleAction}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {actions.name}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              {actions.statsDescription}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              {actions.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Actions;
