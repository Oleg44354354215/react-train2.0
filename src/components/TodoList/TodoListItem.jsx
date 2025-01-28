import s from "./TodoList.module.css";
const TodoListItem = ({ item, deleteClick }) => {
  return (
    <li className={s.li}>
      <input type="checkbox" />
      <span>{item.todo}</span>
      <button onClick={() => deleteClick(item.id)}>DELETE</button>
    </li>
  );
};

export default TodoListItem;
