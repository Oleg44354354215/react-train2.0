// import s from "./Vote.module.jsx";

import { useState } from "react";

const Vote = () => {
  const [cur, setCur] = useState({
    windows: 0,
    android: 0,
    ios: 0,
    linux: 0,
  });
  const value = Object.keys(cur);

  const handleClick = (option) => {
    console.log(option);
    setCur((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };
  return (
    <div>
      <h2>KUU</h2>
      <ul>
        <li>windows : {cur.windows}</li>
        <li>android : {cur.android}</li>
        <li>ios : {cur.ios}</li>
        <li>linux : {cur.linux}</li>
      </ul>
      {value.map((item) => (
        <button key={item} onClick={() => handleClick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
  //   <button onClick={() => handleClick('windows')}>windows</button>
};

export default Vote;
