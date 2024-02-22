import PropTypes from 'prop-types';
import css from './Options.module.css'

 
const Options = ({ updateFeedback, totalFeedback = 0, resetFeedback }) => {
  return (
    <ul className={css.optionbtn}>
        <li><button onClick = {() => updateFeedback('good')}>Good</button></li>
        <li><button onClick = {() => updateFeedback('neutral')}>Neutral</button></li>
        <li><button onClick = {() => updateFeedback('bad')}>Bad</button></li>
        {totalFeedback > 0 && <li><button onClick = {resetFeedback}>Reset</button></li>}
    </ul>
  )
}

Options.propTypes = {
  totalFeedback: PropTypes.number.isRequired,
  updateFeedback: PropTypes.func.isRequired,
  resetFeedback: PropTypes.func.isRequired,
}

export default Options