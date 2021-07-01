import React from "react";
import cardComponent from "./MainPageCardComponents";
import "../../../App.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import user from "../../../Assets/user.png";

export default function MediaCard() {
  function makeCardDivs(cardInfo) {
    return (
      <Card
        className="card"
        //   onClick={() => {
        //     setCardDiv(foodCard());
        //     addWord("lizard");
        //   }}
      >
        <CardActionArea>
          <CardMedia
            className="card-media"
            image="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {cardInfo.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {cardInfo.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return (
    <div className="card-container">
      {cardComponent.map((cardInfo) => makeCardDivs(cardInfo))}
    </div>
  );
}
