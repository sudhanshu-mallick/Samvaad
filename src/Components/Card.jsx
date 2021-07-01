import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../App.css";
import cardComponent from "./ActionComponents/MainPageCards/MainPageCardComponents";
import { Media } from "react-bootstrap";
import user from "../Assets/user.png";

export default function PlaCard() {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();
  const [words, setWords] = useState("");

  function addWord(word) {
    setWords((prev) => prev + " " + word);

    const speech = new SpeechSynthesisUtterance();
    speech.text = word.toString();
    window.speechSynthesis.speak(speech);
  }

  function MakeCardDivs(haha, index) {
    return (
      <div
        onClick={() => {
          // setCardDiv(GetFood());
          addWord("Lizard");
        }}
      >
        <Card className="card">
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={user}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {haha.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {haha.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }

  function MediaCard() {
    return (
      <div className="card-container">
        {cardComponent.map((cardInfo, index) => MakeCardDivs(cardInfo, index))}
      </div>
    );
  }

  function Header(props) {
    return (
      <div className="header">
        <div className="textHeader">
          <br />
          <br />
          <div>{props.words}</div>
          <br />
          <br />
        </div>
        <button className="cancel" onClick={() => setWords("")}>
          X
        </button>
      </div>
    );
  }

  return (
    <div>
      <Header words={words} />
      <div className="card-space">
        <MediaCard />
      </div>
    </div>
  );
}
