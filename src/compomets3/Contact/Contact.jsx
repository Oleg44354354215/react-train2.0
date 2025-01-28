import s from "./Contact.module.css";
const Contact = ({ mass, deleteList }) => {
  return (
    <li className={s.item}>
      <p className={s.text}>{mass.name}</p>
      <p className={s.text}>{mass.number}</p>
      <button onClick={() => deleteList(mass.id)} className={s.button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
