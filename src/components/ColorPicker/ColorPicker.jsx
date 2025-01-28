import s from "./ColorPicker.module.css";
import colors from "../../data/colors.json";
import { useState } from "react";
const ColorPicker = () => {
  const [color, setColor] = useState("Choose color");
  const putColor = (value) => {
    setColor(value);
  };
  return (
    <section className={s.sect} style={{ backgroundColor: color }}>
      <div className={s.div}>
        <h2>{color}</h2>
        <ul className={s.list}>
          {colors.map((item) => (
            <li
              onClick={() => putColor(item.color)}
              className={s.item}
              key={item.id}
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ColorPicker;
