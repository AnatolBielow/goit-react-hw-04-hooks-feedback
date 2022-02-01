import React from "react";
import "./App.css";
import Statistics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";
import Notification from "./Components/Notification/Notification";

class App extends React.Component {
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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let totalFeedback = good + neutral + bad;
    return totalFeedback;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let positiveFeedback = Math.round((good / this.countTotalFeedback()) * 100);
    return positiveFeedback;
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App-container">
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={this.onHandleClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
