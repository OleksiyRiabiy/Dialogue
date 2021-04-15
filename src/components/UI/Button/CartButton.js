import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const CartButton = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={props.clicked}>
      <IconButton
        /* color="secondary" */ aria-label="add to shopping cart"
        style={{ color: "white" }}
      >
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
};

export default CartButton;
