import { useState } from "react";
import "./App.css";
import { Description } from "./Description/Description";
import { Options } from "./Options/Options";

export const App = () => {
  const [value, setFeedBackType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateDood = 
  const updateNeutral =
  const updateBad = 
  
  return (
    <>
      <Description />
      <Options />
    </>
  );
};

export default App;
