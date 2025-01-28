import { useEffect } from "react";
import s from "./Modal.module.css";
const Modal = ({ children, title = "default modal", closeModal }) => {
  const hadleCur = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  useEffect(() => {
    const keyClick = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", keyClick);
    return () => {
      document.removeEventListener("keydown", keyClick);
    };
  }, [closeModal]);
  return (
    <div onClick={hadleCur} className={s.wrapper}>
      <div className={s.content}>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <button onClick={closeModal} className={s.closeBtn}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
