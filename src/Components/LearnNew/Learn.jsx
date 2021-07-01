import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import "./styles.css";

export default function Learn() {
  const [meaning, setMeaning] = useState("Meaning appears here ...");
  const [word, setWord] = useState("");

  function getJoke() {
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/" + word;
    axios.get(url).then((res) => {
      // response = res.data[0].id;

      console.log(
        "Here : " + res.data[0].meanings[0].definitions[0].definition
      );

      setMeaning(res.data[0].meanings[0].definitions[0].definition);
    });
  }

  function clear() {
    setWord("");
    setMeaning("Meaning appears here ...");
  }

  return (
    <div>
      {" "}
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.12.1/css/all.css"
        crossorigin="anonymous"
      ></link>
      <h1 className="heading">WANT TO LEARN SOMETHING ?</h1>
      <div className="meaning-div">
        <input
          type="text"
          className="name formEntry"
          placeholder="Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          id="submit"
          onClick={getJoke}
        >
          Get Meaning
        </Button>
        <Button
          variant="contained"
          color="black"
          id="submit-clear"
          onClick={clear}
        >
          Clear
        </Button>
        <div>
          <div className="secondaryTitle title">{meaning}</div>
        </div>
      </div>
    </div>
  );
}
