import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";

const ContactForm = ({ addList }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const hadlesubmit = (values, action) => {
    addList(values);
    action.resetForm();
  };
  return (
    <div className={s.div}>
      <Formik initialValues={initialValues} onSubmit={hadlesubmit}>
        <Form className={s.form}>
          <label>
            Name
            <Field
              className={s.input}
              type="text"
              placeholder="your name..."
              name="name"
            />
          </label>
          <label>
            Number
            <Field
              className={s.input}
              type="text"
              placeholder="your number..."
              name="number"
            />
          </label>
          <button className={s.but} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
