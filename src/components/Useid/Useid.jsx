import { useState } from "react";
import Fon from "./Fon";

const Useid = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div>
      <button onClick={() => setCurrent((prev) => prev + 1)}>+</button>
      <button onClick={() => setCurrent((prev) => prev - 1)}>-</button>
      <button onClick={() => setCurrent(1)}>Reset</button>
      {Array(current)
        .fill("")
        .map((_, id) => (
          <Fon key={id} />
        ))}
    </div>
  );
};

export default Useid;
