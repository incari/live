import { Typography } from "@material-ui/core";
import React from "react";

const ElementContainer = (props) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        {props.title}
      </Typography>
      {props.children}
    </>
  );
};

export default ElementContainer;
