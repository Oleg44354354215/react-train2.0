import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ item, deleteList }) => {
  return (
    <div>
      <ul className={s.list}>
        {item.map((contact) => (
          <Contact key={contact.id} mass={contact} deleteList={deleteList} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
