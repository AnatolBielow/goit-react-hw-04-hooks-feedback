import { useState } from "react";
import "./App.css";
import Statistics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";
import Notification from "./Components/Notification/Notification";

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  const onHandleClick = (evt) => {
    const changeFeedback = evt.target.textContent;
    switch (changeFeedback) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        return;
    }
  };
  return (
    <div className="App-container">
      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onHandleClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {good > 0 || neutral > 0 || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
}
