import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

const Actions = ({ props }) => {
  const classes = useStyles();
  const actions = props;
  return (
    <Box mx={3}>
      <Card className={classes.root}>
        <CardActionArea>
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
