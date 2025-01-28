import { useState } from "react";

const ControlForm = () => {
  const [usedate, setUseDate] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
    level: "",
    text: "",
    position: "middle",
    isCheck: false,
  });
  const { name, email, password, course, level, text, position, isCheck } =
    usedate;

  const clickToForm = (e) => {
    e.preventDefault();
    console.log(usedate);
  };

  const inputClick = (e) => {
    const { name, value } = e.target;
    if (name === "isCheck") {
      return setUseDate((prev) => ({ ...prev, isCheck: !prev.isCheck }));
    }
    setUseDate((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <h2>Controled form</h2>
      <form onSubmit={clickToForm}>
        <label>
          <span>name</span>
          <input
            type="text"
            name="name"
            onChange={inputClick}
            value={name}
            placeholder="put your name"
          />
        </label>
        <label>
          <span>email</span>
          <input
            name="email"
            type="email"
            onChange={inputClick}
            value={email}
            placeholder="put your email"
          />
        </label>
        <label>
          <span>password</span>
          <input
            name="password"
            type="password"
            onChange={inputClick}
            value={password}
            placeholder="put your password"
          />
        </label>
        <label>
          <span>course</span>
          <input
            name="course"
            type="text"
            onChange={inputClick}
            value={course}
            placeholder="put your course"
          />
        </label>
        <label>
          <span>Level:</span>
          <select name="level" type="text" onChange={inputClick} value={level}>
            <option value="easy">easy</option>
            <option value="top">top</option>
            <option value="hight">hight</option>
          </select>
        </label>

        <div>
          <label>
            <span>Text:</span>
            <textarea
              name="text"
              type="text"
              onChange={inputClick}
              value={text}
            ></textarea>
          </label>
        </div>
        <div>
          <span>Position:</span>
          <label>
            <input
              checked={"junior" === position}
              name="position"
              type="radio"
              onChange={inputClick}
              value="junior"
            ></input>
            junior
          </label>
          <label>
            <input
              checked={"middle" === position}
              name="position"
              type="radio"
              onChange={inputClick}
              value="middle"
            ></input>
            middle
          </label>
          <label>
            <input
              checked={"senior" === position}
              name="position"
              type="radio"
              onChange={inputClick}
              value="senior"
            ></input>
            senior
          </label>
        </div>
        <div>
          <label>
            <div>
              <span>ISChecked?</span>
            </div>
            <input
              name="isCheck"
              type="checkbox"
              onChange={inputClick}
              checked={isCheck}
            />
            kuku
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ControlForm;
