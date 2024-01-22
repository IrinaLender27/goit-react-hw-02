import { useState, useEffect } from "react";
import "./App.css";
import { Description } from "./Description/Description";
import { Options } from "./Options/Options";
import { Feedback } from "./FeedBack/FeedBack";
import { Notification } from "./Notification/Notification";

export const App = () => {
  const [feedBackType, setFeedBackType] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    return savedFeedback === null
      ? { good: 0, neutral: 0, bad: 0 }
      : JSON.parse(savedFeedback);
  });

  const onUpdate = (items) => {
    setFeedBackType({
      ...feedBackType,
      [items]: feedBackType[items] + 1,
    });
  };

  const totalFeedback =
    feedBackType.good + feedBackType.neutral + feedBackType.bad;

  const isHidden = totalFeedback === 0;

  const onReset = () => {
    setFeedBackType({ good: 0, neutral: 0, bad: 0 });
  };

  const positivFeedBack = Math.round(
    ((feedBackType.good + feedBackType.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedBackType));
  }, [feedBackType]);

  return (
    <>
      <Description>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </Description>
      <Options onUpdate={onUpdate} isHidden={isHidden} onReset={onReset} />
      {isHidden ? (
        <Notification />
      ) : (
        <Feedback
          feedBackType={feedBackType}
          totalFeedback={totalFeedback}
          positivFeedBack={positivFeedBack}
        />
      )}
    </>
  );
};

export default App;
