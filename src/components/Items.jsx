import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const Items = ({ type, props }) => {
  const classes = useStyles();
  const items = props;

  return (
    <Box my={3}>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            {type === "backpack" ? `${items.name} x ${items.qty}` : items.name}
          </Typography>
          {items.description ? (
            <Typography variant="body2" color="textSecondary" component="p">
              {items.description}
            </Typography>
          ) : null}
        </CardContent>
        <CardActions>
          {items.actions > 1 ? (
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              {items.actions.map((actions) => (
                <Button size="large" color="primary" key={actions}>
                  {actions}
                </Button>
              ))}
            </Grid>
          ) : (
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              {items.actions.map((actions) => (
                <Button size="large" color="primary" key={actions}>
                  {actions}
                </Button>
              ))}
            </Grid>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default Items;
