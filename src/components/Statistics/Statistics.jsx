import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={styles.text}>good:{good}</p>
      <p className={styles.text}>neutral:{neutral}</p>
      <p className={styles.text}>bad:{bad}</p>
      <p className={styles.text}>Total: {total}</p>
      <p className={styles.text}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};
Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
