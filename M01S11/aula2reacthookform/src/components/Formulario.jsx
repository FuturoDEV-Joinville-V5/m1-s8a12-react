import { useForm } from "react-hook-form";

import styles from "./Formulario.module.css";

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // função que rodará quando o form for enviado
  const lidarComEnvio = (dadosDoForm) => {
    console.log({ dadosDoForm });
  };

  // register retorna um objeto com os seguites attributos
  // { name, onBlur, onChange }

  return (
    <form onSubmit={handleSubmit(lidarComEnvio)}>
      <div className={styles.caixaCampo}>
        <input
          {...register("profissao", {
            required: "Campo profissão é obrigatório!",
          })}
          placeholder="Profissão"
        />
        {errors.profissao && <span>{errors.profissao.message}</span>}
      </div>
      <div className={styles.caixaCampo}>
        <input
          {...register("email", {
            required: "Campo e-mail é obrigatório!",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "E-mail iválido!",
            },
          })}
          placeholder="E-mail"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className={styles.caixaCampo}>
        <input
          {...register("idade", {
            required: "Campo idade é obrigatório!",
            min: { value: 18, message: "Idade mínima: 18 anos" },
          })}
          placeholder="Idade"
        />
        {errors.idade && <span>{errors.idade.message}</span>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
