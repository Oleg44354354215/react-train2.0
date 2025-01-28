import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "../TryFormik/TryFormik.module.css";
const SecondFormik = () => {
  const initialValues = {
    name: "",
    email: "",
    age: "",
    level: "",
    agree: false,
  };

  const fon = /^[A-Za-zA-Яа-яЄєШшЇїГг-]+$/;
  const apllySchema = Yup.object().shape({
    name: Yup.string()
      .required("Don`t correct")
      .matches(fon, "only letters")
      .min(4, "min 4 letters")
      .max(20, "max 20 letters"),
    email: Yup.string().required("Don`t correct"),
    age: Yup.number()
      .required("Don`t correct")
      .min(18, "min age 18")
      .max(65, "max years 65 years"),
    level: Yup.string().required("kuku").oneOf(["1", "2", "3", "4", "5"]),
  });

  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={apllySchema}
      >
        {() => (
          <Form className={s.form}>
            <Field type="text" name="name" placeholder="put your name" />
            <ErrorMessage className={s.color} name="name" component="span" />
            <Field type="email" name="email" placeholder="put your email" />
            <ErrorMessage className={s.color} name="email" component="span" />
            <Field type="number" name="age" placeholder="put your age" />
            <ErrorMessage className={s.color} name="age" component="span" />
            <Field
              as="textarea"
              type="text"
              name="info"
              placeholder="your text..."
            />
            <ErrorMessage className={s.color} name="info" component="span" />
            <Field as="select" name="level">
              <option disabled value="">
                Choose level
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">4</option>
              <option value="4">5</option>
              <option value="5">5</option>
            </Field>
            <ErrorMessage className={s.color} name="level" component="span" />
            <label>
              Are you?
              <Field type="checkbox" name="agree" />
              <ErrorMessage className={s.color} name="agree" component="span" />
            </label>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SecondFormik;
