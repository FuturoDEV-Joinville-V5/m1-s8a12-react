import WorkshopItem from "./WorkshopItem";

import styles from "./WorkshopList.module.css";

function WorkshopList({ workshops = [], allowEdit = false }) {
  return (
    <ul className={styles.WorkshopList}>
      {workshops.map((w) => (
        <WorkshopItem key={w.id} workshop={w} allowEdit={allowEdit} />
      ))}
    </ul>
  );
}

export default WorkshopList;
