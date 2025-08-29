import styles from "./ServiceCard.module.css";

function ServiceCard({ label = "", workshops = [], onClick = () => {} }) {
  return (
    <li
      className={styles.ServiceCard}
      onClick={() => onClick({ label, workshops })}
    >
      <h3>{label}</h3>
      <p className={styles.ServiceCount}>{workshops.length}</p>
    </li>
  );
}

export default ServiceCard;
