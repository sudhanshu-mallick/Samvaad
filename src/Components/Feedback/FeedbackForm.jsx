import React from "react";
import "./feedbackStyles.css";

export default function FeedbackForm() {
  return (
    <div>
      <div className="wrapper">
        <form className="form">
          <div className="pageTitle title">Feedback Any ? </div>
          <div className="title">Please fill this form to submit.</div>
          {/* <input type="text" className="name formEntry" placeholder="Name" /> */}

          <input type="text" className="email formEntry" placeholder="Name" />
          <input type="text" className="email formEntry" placeholder="Email" />
          <textarea
            className="message formEntry"
            placeholder="Message"
          ></textarea>
          <br />
          <div className="title">How much you like the color ?</div>
          <div className="feedback-div">
            <button className="feedback-button1">Loved it</button>
            <button className="feedback-button2">Average</button>
            <button className="feedback-button3">Not Good</button>
          </div>
          <div className="title">Was it easy to use ?</div>
          <div className="feedback-div">
            <button className="feedback-button1">YESSSS</button>
            <button className="feedback-button2">NOO</button>
            <button className="feedback-button3">Can Be Better</button>
          </div>

          <div className="title">Did you like the font ?</div>
          <div className="feedback-div">
            <button className="feedback-button1">Loved it</button>
            <button className="feedback-button2">Average</button>
            <button className="feedback-button3">Not Good</button>
          </div>
          <button className="submit formEntry">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
