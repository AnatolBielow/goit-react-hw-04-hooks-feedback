import React from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";
import { Container } from "./Feedback.styled";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = (key) => {
    this.setState((prevState) => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100
    );

    return (
      <Container>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onHandleClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {countTotalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}

export default Feedback;
