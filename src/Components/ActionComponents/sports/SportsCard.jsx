import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "../../../App.css";
import sports from "./SportsComponents";

export default function SportsCard() {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 300,
      width: 300,
      objectFit: "cover",
    },
    card: {
      padding: "5px",
      margin: "15px",
      width: "90%",
      objectFit: "cover",
      color: "#04009a",
      fontSize: "50px",
    },
  });

  const classes = useStyles();
  const [words, setWords] = useState("");

  function addWord(word) {
    let text;
    setWords((prev) => {
      text = prev + " " + word;

      return prev + " " + word;
    });

    const speech = new SpeechSynthesisUtterance();
    speech.text = text.toString();
    window.speechSynthesis.speak(speech);
  }

  function MakeCardDiv(cardProp) {
    const addr = cardProp.src + "";
    const location = "." + addr.substring(7);

    return (
      <div
        onClick={() => {
          addWord(cardProp.name);
        }}
      >
        <Card className="card">
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require(location + "").default}
            />
            <CardContent>
              <Typography
                className={classes.card}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {cardProp.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }

  function PeopleCard() {
    return (
      <div className="card-container">
        {sports.map((cardInfo) => MakeCardDiv(cardInfo))}
      </div>
    );
  }

  function Header(props) {
    return (
      <div className="header">
        <div className="text-header">
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
        <PeopleCard />
      </div>
    </div>
  );
}
