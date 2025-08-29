import WorkshopItem from "./WorkshopItem";

import styles from "./WorkshopList.module.css";

function WorkshopList({ workshops = [] }) {
  return (
    <ul className={styles.WorkshopList}>
      <h3>Lista de oficinas</h3>
      {workshops.map((w) => (
        <WorkshopItem key={w.id} workshop={w} />
      ))}
    </ul>
  );
}

export default WorkshopList;
