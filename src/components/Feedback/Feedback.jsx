import PropTypes from 'prop-types';
import css from './Feedback.module.css'

const Feedback = ({ states: { good = 0, neutral = 0, bad = 0 }, totalFeedback = 0, positiveFeedback = 0}) => {
  return (
    <>
    {totalFeedback > 0 &&
    <ul className={css.feedbackstates}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
    </ul>
    }
    </>
  )
}

Feedback.propTypes = {
    states: PropTypes.object,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}

export default Feedback