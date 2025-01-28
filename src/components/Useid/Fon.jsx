import { useId } from "react";

const Fon = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>SALAM TO Me AND KU </label>
      <input type="text" id={id} />
    </div>
  );
};

export default Fon;
