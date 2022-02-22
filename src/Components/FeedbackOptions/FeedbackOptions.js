import { Button } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return Object.keys(options).map((key) => (
    <Button key={key} type="button" onClick={onLeaveFeedback}>
      {key}
    </Button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
