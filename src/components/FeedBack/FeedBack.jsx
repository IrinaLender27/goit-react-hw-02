import css from "./FeedBack.module.css";

export const Feedback = ({
  feedBackType: { good, neutral, bad },
  totalFeedback,
  positivFeedBack,
}) => {
  console.log(good);
  return (
    <div className={css.feedBack}>
      <p>Good:{good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{totalFeedback}</p>
      <p>Positiv:{positivFeedBack}%</p>
    </div>
  );
};
