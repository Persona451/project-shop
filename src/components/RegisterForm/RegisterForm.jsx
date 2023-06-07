import React from "react";
import TextField from "@mui/material/TextField";
import styles from "../../pages/RegisterPage/registerpage.module.css";
import Button from "@mui/material/Button";
import { authServices } from "../../services/auth";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";

const RegistrPage = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Обязательное поле")
      .email("Введите корректный email"),
    username: yup.string().required("Обязательное поле"),
    password: yup.string().required("Обязательное поле"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
      role: "user", // Set the role to "user" by default
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const { data } = await registration(values);
        console.log(data._doc);
        toast("Пользователь зарегистрирован");
        resetForm();
      } catch (err) {
        toast("Email или Имя уже существует");
      }
    },
  });

  const { registration } = authServices();

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Регистрация</h1>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextField
          className={styles.email}
          error={formik.errors.email}
          helperText={formik.errors.email ? formik.errors.email : ""}
          onBlur={formik.handleBlur}
          label="Ваш Email"
          variant="filled"
          type="email"
          name="email"
          fullWidth
          style={{ marginBottom: "20px", backgroundColor: "rgb(184, 184, 184)" }}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <TextField
          className={styles.name}
          label="Ваше имя"
          variant="filled"
          type="text"
          name="username"
          fullWidth
          error={formik.errors.username}
          helperText={formik.errors.username ? formik.errors.username : ""}
          onBlur={formik.handleBlur}
          style={{ marginBottom: "20px", backgroundColor: "rgb(184, 184, 184)" }}
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <TextField
          className={styles.password}
          label="Ваш пароль"
          variant="filled"
          type="password"
          name="password"
          error={formik.errors.password}
          helperText={formik.errors.password ? formik.errors.password : ""}
          onBlur={formik.handleBlur}
          fullWidth
          style={{ marginBottom: "20px", backgroundColor: "rgb(184, 184, 184)" }}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          style={{ fontSize: "24px", borderRadius: "20px", backgroundColor: "rgb(110, 223, 195)", marginTop: "20px" }}
        >
          Зарегистрироваться
        </Button>
        <p className={styles.login}>
          Уже существует аккаунт? Попробуйте{" "}
          <NavLink to="/login" className={styles.loginBtn}>
            Войти
          </NavLink>
        </p>
      </form>
      <ToastContainer />
    </section>
  );
};

export default RegistrPage;
