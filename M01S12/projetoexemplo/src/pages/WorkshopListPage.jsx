import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import WorkshopList from "../components/WorkshopList";

import styles from "./WorkshopListPage.module.css";

function WorkshopListPage() {
  const [appData] = useContext(AppContext);
  const userId = appData.logedUser?.id; // operador optional chaining (?.)
  const userWorkshops = appData.workshops.filter((w) => w.userId === userId);

  return (
    <div className={styles.WorkshopListPage}>
      <h2>Suas Oficinas Cadastradas</h2>
      <WorkshopList workshops={userWorkshops} />
    </div>
  );
}

export default WorkshopListPage;
