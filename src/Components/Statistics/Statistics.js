import { ListItem } from "./Statistics.styled";
import PropTypes from "prop-types";
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <ListItem>
        Good: <span>{good}</span>
      </ListItem>
      <ListItem>
        Neutral: <span>{neutral}</span>
      </ListItem>
      <ListItem>
        Bad: <span>{bad}</span>
      </ListItem>
      <ListItem>
        Total: <span>{total}</span>
      </ListItem>
      <ListItem>
        Positive Feedback: <span>{positivePercentage}%</span>
      </ListItem>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
