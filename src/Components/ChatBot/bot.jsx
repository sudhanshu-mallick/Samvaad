import React, { useState } from "react";
import chatbot from "../../Assets/chatbot.png";
import user from "../../Assets/user.png";
import "../ChatBot/styles.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import enter from "./enter.png";

let intro = ["Hello, I am Aanya", "Hi, I am Robo Aanya"];
let help = [
  "How may i assist you?",
  "How can i help you?",
  "What i can do for you?",
];
let greetings = [
  "I am good dear, how about you?",
  "I am fine, how are you doing today?",
];
let hobbies = [
  "I love to talk to humans",
  "I love making human friends, Would you like to be my friend?",
  "I love cooking, would you like a pizza?",
];
let pizzas = [
  "Which type of pizza do you like?",
  "I can make a pizza for you",
  "I would love to make a pizza for you",
  "Would you like cheese pizza?",
];
let thank = ["Most welcome", "Its my pleasure", "Mention not"];
let closing = ["Ok bye, take care", "Take-care", "Bye-bye, see you soon.."];
let okay = ["Sure dear, are you okay?", "Yes, tell me what happened."];
let notOkay = [
  "It's okay to not be okay",
  "You should try meditating if you're not feeling good",
  "I hope things get better soon",
  "You can talk to me if you want",
];

let care = [
  "You can read about self-care here: https://mhanational.org/taking-good-care-yourself",
];
let yourself = [
  "Tell me something about you",
  "What do you like to do",
  "What are your hobbies?",
];

export default function Demo() {
  const [divText, setDivText] = useState();
  const [buttonIcon, setButtonIcon] = useState("fas fa-microphone-alt fa-3x");

  var SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

  function showUserMessage(userMessage) {
    const output = <div className="chatarea-inner user">{userMessage}</div>;
    setDivText((prev) => (
      <div>
        {prev}
        {output}
      </div>
    ));
  }

  function showBotMessage(botMessage) {
    const output = <div className="chatarea-inner chatbot">{botMessage}</div>;
    setDivText((prev) => (
      <div>
        {prev}
        {output}
      </div>
    ));
  }

  function chatBotVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "What do you like to do in your free time?";

    if (message.includes("who are you")) {
      let finalResult = intro[Math.floor(Math.random() * intro.length)];
      speech.text = finalResult;
    }

    if (message.includes("fine")) {
      let finalresult = help[Math.floor(Math.random() * help.length)];
      speech.text = finalresult;
    }
    if (
      message.includes("how are you") ||
      message.includes("how are you doing today")
    ) {
      let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
      speech.text = finalresult;
    }
    if (
      message.includes("tell me something about you") ||
      message.includes("hobbies")
    ) {
      let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
      speech.text = finalresult;
    }
    if (message.includes("pizza")) {
      let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
      speech.text = finalresult;
    }
    if (
      message.includes("thank you") ||
      message.includes("thank you so much")
    ) {
      let finalresult = thank[Math.floor(Math.random() * thank.length)];
      speech.text = finalresult;
    }
    if (message.includes("talk to you") || message.includes("talk")) {
      let finalresult = closing[Math.floor(Math.random() * closing.length)];
      speech.text = finalresult;
    }
    if (
      message.includes("would you like to know about my day") ||
      message.includes("something happened")
    ) {
      let finalresult = okay[Math.floor(Math.random() * okay.length)];
      speech.text = finalresult;
    }
    if (
      message.includes("I am feeling bad") ||
      message.includes("bad") ||
      message.includes("I am not ok")
    ) {
      let finalresult =
        notOkay[Math.floor(Math.random() * notOkay.length)] +
        " " +
        pizzas[Math.floor(Math.random() * pizzas.length)];
      speech.text = finalresult;
    }
    if (
      message.includes("anxious") ||
      message.includes("It's a bad day") ||
      message.includes("unhappy") ||
      (message.includes("not") && message.includes("good care"))
    ) {
      let finalresult = care[Math.floor(Math.random() * care.length)];
      speech.text = finalresult;
    }
    if (message.includes("Hi") || message.includes("hello")) {
      let finalresult =
        intro[Math.floor(Math.random() * intro.length)] +
        " " +
        yourself[Math.floor(Math.random() * yourself.length)];
      speech.text = finalresult;
    }

    window.speechSynthesis.speak(speech);
    showBotMessage(speech.text);
  }

  recognition.onresult = function (e) {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    showUserMessage(transcript);
    chatBotVoice(transcript);
  };

  recognition.onend = function () {
    setButtonIcon("fas fa-microphone-alt fa-3x");
  };

  function clickIt() {
    setButtonIcon("fas fa-volume-up fa-3x");
    recognition.start();
  }

  const [textBot, setTextBot] = useState("");

  function submit() {
    showUserMessage(textBot + "");
    chatBotVoice(textBot + "");
    setTextBot("");
  }

  return (
    <div>
      {" "}
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.12.1/css/all.css"
        crossorigin="anonymous"
      ></link>
      <h1 className="heading">TALK TO AANYA !</h1>
      <div>
        <input
          type="text"
          className="form-entry"
          placeholder="Type a message ..."
          value={textBot}
          onChange={(e) => setTextBot(e.target.value)}
        />
        <i
          class="fa fa-paper-plane fa-3x enter-button"
          aria-hidden="true"
          onClick={submit}
        ></i>
        {/* <Button
          variant="contained"
          color="black"
          id="submit-clear"
          onClick={submit}
        >
          SUBMIT
        </Button> */}
      </div>
      <div className="main">
        <div className="user-area">
          <img src={user} />
        </div>
        <div className="chatarea-main">
          <div className="chatarea-outer">{divText}</div>
        </div>

        <div className="chatbot-area">
          <img src={chatbot} />
        </div>

        <button onClick={clickIt}>
          <i className={buttonIcon}></i>
        </button>
      </div>
    </div>
  );
}
