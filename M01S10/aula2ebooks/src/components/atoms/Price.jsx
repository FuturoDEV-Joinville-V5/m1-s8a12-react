import styles from "./Price.module.css";

export default function Price({ value = 0 }) {
  return (
    <div className={styles.PriceContainer}>
      <p>R$ {value.toFixed(2)}</p>
    </div>
  );
}
