export const Feedback = ({
  feedBackType: { good, neutral, bad },
  totalFeedback,
  positivFeedBack,
}) => {
  console.log(good);
  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{totalFeedback}</p>
      <p>Positiv:{positivFeedBack}%</p>
    </>
  );
};
