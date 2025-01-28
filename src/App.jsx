import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transaction from "./data/transaction.json";

import "./App.css";
import Counter from "./components/Counter/Counter";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import TodoList from "./components/TodoList/TodoList";
import Modal from "./components/Modal/Modal";
import { useEffect, useState } from "react";
import Trigger from "./components/Trigger/Trigger";
import Vote from "./components/Vote/Vote";
import Homework from "./components/Homework/Homework";
import Uncontrol from "./components/UncotrolForm/Uncontrol";
import ControlForm from "./components/ControlForm/ControlForm";
import Useid from "./components/Useid/Useid";
import TryFormik from "./components2/TryFormik/TryFormik";
import SecondFormik from "./components2/SecondFormik/SecondFormik";

import ContactForm from "./compomets3/ContactForm/ContactForm";
import ContactList from "./compomets3/ContactList/ContactList";
import SearchBox from "./compomets3/SearchBox/SearchBox";
import cont from "./data/cont.json";
function App() {
  // const [open, setOpen] = useState(false);
  // const openModal = () => setOpen(true);
  // const closeModal = () => setOpen(false);
  const [cur, setCur] = useState("");
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) ?? cont
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteList = (id) => {
    const check = contacts.filter((item) => item.id != id);
    setContacts(check);
  };

  const filtrList = contacts.filter((it) =>
    it.name.toLowerCase().includes(cur.toLowerCase())
  );

  const addList = (it) => {
    const obj = {
      id: crypto.randomUUID(),
      name: it.name,
      number: it.number,
    };
    setContacts((prev) => [...prev, obj]);
  };
  return (
    <>
      {/* <Profile data={userData} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} /> */}
      {/* <Counter /> */}
      {/* <ColorPicker /> */}
      {/* <TodoList /> */}
      {/* <button onClick={openModal}>Open modal!</button>
      {open && <Modal closeModal={closeModal}>Продам килим</Modal>} */}
      {/* <Trigger /> */}
      {/* <Vote /> */}
      {/* <Homework /> */}
      {/* <Uncontrol /> */}
      {/* <ControlForm /> */}
      {/* <Useid /> */}

      {/* <TryFormik /> */}
      {/* <SecondFormik /> */}

      <h1>Phonebook</h1>
      <ContactForm addList={addList} />
      <SearchBox item={contacts} cur={cur} setCur={setCur} />
      <ContactList item={filtrList} deleteList={deleteList} />
      {filtrList.length === 0 && <p>SALAM!!!!!!!!</p>}
    </>
  );
}
export default App;
