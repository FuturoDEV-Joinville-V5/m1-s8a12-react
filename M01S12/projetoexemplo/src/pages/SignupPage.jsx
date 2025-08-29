import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

import styles from "./SignupPage.module.css";

const getNowDate = () => {
  // retorna "YYYY-MM-DDD" ex: "2025-08-29"
  return new Date().toISOString().split("T")[0];
};

// peguei da internet e ajustei
// https://devarthur.com/blog/funcao-javascript-para-validar-cpf
function validateCpf(cpf) {
  let sum = 0;
  let rest;
  const strCPF = String(cpf).replace(/[^\d]/g, "");
  if (strCPF.length !== 11) return false;
  if (
    [
      "00000000000",
      "11111111111",
      "22222222222",
      "33333333333",
      "44444444444",
      "55555555555",
      "66666666666",
      "77777777777",
      "88888888888",
      "99999999999",
    ].indexOf(strCPF) !== -1
  )
    return false;
  for (let i = 1; i <= 9; i++)
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(strCPF.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++)
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}

// peguei de uma sugestão do Google
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function SignupPage() {
  const [appData, updateAppData] = useContext(AppContext);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthday, setBirthday] = useState(getNowDate());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const addError = (errorObject) => {
    setErrors((currentErrors) => ({ ...currentErrors, ...errorObject }));
  };

  const handleCpfChange = (event) => {
    const newCpf = event.target.value.replace(/[^0-9]/g, "");
    const isValid = validateCpf(newCpf);
    const isUsed = appData.users.find((u) => u.cpf === newCpf);

    addError({
      cpf: !isValid ? "CPF inválido." : isUsed ? "CPF em uso." : null,
    });

    setCpf(newCpf);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    const isValid = validateEmail(newEmail);
    const isUsed = appData.users.find((u) => u.email === newEmail);

    addError({
      email: !isValid ? "E-mail inválido." : isUsed ? "Email em uso." : null,
    });

    setEmail(newEmail);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = appData.users.find(
      (u) => u.email === email && u.password === password
    );

    if (userData) {
      updateAppData({ logedUser: userData });
    }
  };

  return (
    <div className={styles.SignupPage}>
      <h2>Cadastre-se</h2>
      <form onSubmit={handleSubmit} className={styles.SignupForm}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="gender">Gênero</label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
          <option value="other">Outro</option>
        </select>
        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          placeholder="000.000.000-00"
          value={cpf}
          onChange={handleCpfChange}
          required
        />
        {errors.cpf && <span>{errors.cpf}</span>}
        <label htmlFor="birthday">Nascimento</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          placeholder=""
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {errors.email && <span>{errors.email}</span>}
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
        <Link to="/">Voltar</Link>
      </form>
    </div>
  );
}

export default SignupPage;
