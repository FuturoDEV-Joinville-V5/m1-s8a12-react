import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import ServiceCardGrid from "../components/ServiceGrid";

function DashboardPage() {
  const [appData] = useContext(AppContext);

  console.log({ appData });

  const handleServiceClick = (service) => {
    console.log(service);
  };

  return (
    <div className="DashboardPage">
      <h2>Painel de Oficinas</h2>
      <ServiceCardGrid
        workshops={appData.workshops}
        onServiceClick={handleServiceClick}
      />
    </div>
  );
}

export default DashboardPage;
