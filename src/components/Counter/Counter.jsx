import { useEffect, useState } from "react";
import s from "./Counter.module.css";
const Counter = () => {
  const [count, setCount] = useState(22);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log("kuku");
  }, []);

  useEffect(() => {
    console.log("лічильник було змінено", count);
  }, [count]);
  useEffect(() => {
    console.log("step was chanched", step);
  }, [step]);

  const plusClick = () => {
    setCount((prev) => prev + step);
  };
  const minusClick = () => {
    if (count <= 0) {
      return alert("KUKU");
    }
    setCount((prev) => prev - step);
  };
  const resetClick = () => {
    setCount(0);
  };
  return (
    <div>
      <div className={s.cont}>
        <h1 className={s.h}>{count}</h1>
        <input value={step} onChange={(e) => setStep(+e.target.value)} />
        <div className={s.conta}>
          <button onClick={minusClick} className={s.but}>
            minus
          </button>
          {count > 0 && (
            <button onClick={resetClick} className={s.but}>
              reset
            </button>
          )}
          <button onClick={plusClick} className={s.but}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
