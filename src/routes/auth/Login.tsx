import { createFileRoute } from "@tanstack/react-router";
import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";

export const Route = createFileRoute("/auth/Login")({
  component: RouteComponent,
});

type LoginFormType = {
  email: string;
  password: string;
};

function RouteComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();

  const onSubmit = (data: LoginFormType) => {
    console.log(data);
  };

  return (
    <div className={styles.bg}>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <p>Infoskærm login</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input
            className="inputField"
            type="email"
            id="email"
            placeholder="Din email"
            {...register("email", {
              required: "Dette felt er påkrævet",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Dette er ikke en gyldig email",
              },
            })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message as string}</p>
          )}
          <input
            className="inputField"
            type="password"
            id="password"
            placeholder="Din adgangskode"
            {...register("password", {
              required: "Dette felt er påkrævet",
            })}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message as string}</p>
          )}
          <Button buttonText="Login" type="submit" variant="primary"></Button>
        </form>
        <div className={styles.line}></div>
        <div className={styles.contactInfo}>
          <p>Hvis du ikke har adgang, så kontakt Oskar Eriksen</p>
          <div className={styles.phone}>
            <img src="/assets/phone.svg" alt="" />
            <p>42 76 29 49</p>
          </div>
          <div className={styles.email}>
            <img src="/assets/mail.svg" alt="" />
            <p>omle.eriksen@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
