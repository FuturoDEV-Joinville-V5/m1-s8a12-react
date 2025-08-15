import styles from "./Tags.module.css";

export default function Tags({ categories = [] }) {
  return (
    <ul className={styles.TagsContainer}>
      {categories.map((cat) => (
        <li key={cat}>{cat}</li>
      ))}
    </ul>
  );
}
