import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./../App.css";
import samvaad from "../Assets/samvaad.jpeg";
import samvaadleg from "../Assets/samvaadleg.jpeg";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    fontSize: "50px",
    color: "#FFEAC9",
    padding: "10px",
    height: "150px",
  },
  media: {
    height: 120,
    width: 120,
    objectFit: "cover",
    borderRadius: "20px",
    marginLeft: "100px",
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  function Header(props) {
    return (
      <div className="header-samvaad">
        <CardMedia className={classes.media} image={samvaad} />
        <div className="text-header">
          <div>{props.words}</div>
          <br />
          <br />
        </div>
        <CardMedia className={classes.media} image={samvaadleg} />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.root} variant="h5" color="inherit">
        <Header words="SAMVAAD" />
      </Typography>
    </div>
  );
}
