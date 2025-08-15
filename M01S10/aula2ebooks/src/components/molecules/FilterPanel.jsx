import styles from "./FilterPanel.module.css";

export default function FilterPanel({ onChange = () => {}, categories = [] }) {
  const atualizaFiltro = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.FilterPanelContainer}>
      <select name="filter" id="filter" onChange={atualizaFiltro}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
