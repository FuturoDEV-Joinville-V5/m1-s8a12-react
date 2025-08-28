import { useContext, useRef } from "react";
import { AppContext } from "../contexts/AppContext";

import styles from "./LoginPage.module.css";

function LoginPage() {
  const [appData, updateAppData] = useContext(AppContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const userData = appData.users.find(
      (u) => u.email === email && u.password === password
    );

    if (userData) {
      updateAppData({ logedUser: userData });
    }
  };

  return (
    <div className={styles.LoginPage}>
      <h2>Faça Login</h2>
      <form onSubmit={handleSubmit} className={styles.LoginForm}>
        <input
          ref={emailRef}
          type="text"
          name="email"
          placeholder="E-mail"
          required
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Senha"
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
