import { useState } from "react";
import TriggerChild from "./Triggerchild";

const Trigger = () => {
  const [clocks, setClocks] = useState(1);
  return (
    <div>
      <h1>KU</h1>
      <button onClick={() => setClocks((prev) => prev + 1)}>{clocks}</button>
      <TriggerChild clocks={clocks} />
    </div>
  );
};

export default Trigger;
