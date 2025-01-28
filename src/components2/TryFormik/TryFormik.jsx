import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./TryFormik.module.css";
const TryFormik = () => {
  const initialValues = {
    name: "",
    age: "",
    plan: "",
    about: "",
    agree: false,
  };
  const fon = /^[A-Za-zA-Яа-яЄєШшЇїГг-]+$/;
  const apllySchema = Yup.object().shape({
    name: Yup.string()
      .required("Це поле обов'язкове")
      .min(3, "мінімум 3")
      .max(20, "максимум 20  символів")
      .matches(fon, "тільки букви"),
    age: Yup.number()
      .required("Це поле обов'язкове")
      .min(18, "min 18 years")
      .max(60),
    plan: Yup.string()
      .oneOf(["def", "pro", "vip"])
      .required("Це поле обов'язкове"),
    about: Yup.number().required(),
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
            <Field name="name" placeholder="salam" />
            <ErrorMessage className={s.color} name="name" component="span" />
            <Field name="age" type="number" placeholder="salam" />
            <ErrorMessage className={s.color} name="age" component="span" />
            <Field as="select" name="plan" type="number" placeholder="salam">
              <option disabled value="">
                Choose plan
              </option>
              <option value="def">def</option>
              <option value="pro">pro</option>
              <option value="vip">vip</option>
            </Field>
            <ErrorMessage className={s.color} name="plan" component="span" />

            <Field as="textarea" name="about" type="text" placeholder="salam" />
            <ErrorMessage className={s.color} name="about" component="span" />

            <label>
              <Field name="agree" type="checkbox" />
              <ErrorMessage className={s.color} name="agree" component="span" />
              SLAM
            </label>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TryFormik;
