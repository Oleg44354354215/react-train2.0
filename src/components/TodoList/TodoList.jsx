import { useEffect, useState } from "react";
// import list from "../../data/list.json";
import s from "./TodoList.module.css";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const [todo, setTodo] = useState(() => {
    const newValue = JSON.parse(localStorage.getItem("todo"));
    if (newValue?.length) {
      return newValue;
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  // так корочше але складніша логіка
  // const [todo, setTodo] = useState(() => {
  //   JSON.parse(localStorage.getItem("todo")) ?? [];
  // });
  const [put, setPut] = useState("");

  const deleteClick = (id) => {
    const newData = todo.filter((item) => item.id !== id);
    setTodo(newData);
  };
  const addClick = () => {
    const newObj = {
      id: crypto.randomUUID(),
      todo: put,
    };
    setTodo((prev) => [...prev, newObj]);
    setPut("");
  };
  return (
    <div className={s.div}>
      <div>
        <input value={put} onChange={(e) => setPut(e.target.value)} />
        <button onClick={addClick}>Add</button>
      </div>
      <ul className={s.list}>
        {todo.map((item) => (
          <TodoListItem key={item.id} item={item} deleteClick={deleteClick} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
