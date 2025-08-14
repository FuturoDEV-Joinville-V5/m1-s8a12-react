// importando um módulo CSS escopado
import styles from "./Button.module.css";

export default function Button({ text, variat = "primary", onClick }) {
  return (
    <button className={[styles.button, styles[variat]].join(" ")}>
      {text}
    </button>
  );
}
