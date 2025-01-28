import { useState } from "react";
import Descriprion from "../Description/Descriprion";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import Options from "../Options/Options";

const Homework = () => {
  const [mark, setMark] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const values = Object.keys(mark);
  const total = mark.good + mark.neutral + mark.bad;
  const positive = ((mark.good / total) * 100).toFixed(1);

  const putClick = (option) => {
    setMark((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };
  const resetPut = () => {
    setMark({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <div>
      <Descriprion />
      <Options
        values={values}
        mark={mark}
        putClick={putClick}
        resetPut={resetPut}
        total={total}
      />
      {total > 0 && <Feedback mark={mark} total={total} positive={positive} />}
      {total == 0 && <Notification />}
    </div>
  );
};
export default Homework;
