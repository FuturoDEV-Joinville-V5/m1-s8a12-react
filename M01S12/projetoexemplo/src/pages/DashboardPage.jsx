import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import ServiceCardGrid from "../components/ServiceGrid";
import WorkshopList from "../components/WorkshopList";

import styles from "./DashboardPage.module.css";

function DashboardPage() {
  const [appData] = useContext(AppContext);
  const [filteredWorkshops, setFiltereWorkshops] = useState(appData.workshops);

  console.log({ appData });

  const handleServiceClick = (service) => {
    setFiltereWorkshops(service.workshops);
    console.log(service);
  };

  return (
    <div className={styles.DashboardPage}>
      <h2>Painel de Oficinas</h2>
      <ServiceCardGrid
        workshops={appData.workshops}
        onServiceClick={handleServiceClick}
      />
      <h2>Lista de Oficinas</h2>
      <WorkshopList workshops={filteredWorkshops} />
    </div>
  );
}

export default DashboardPage;
