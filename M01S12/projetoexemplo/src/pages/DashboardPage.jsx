import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function DashboardPage() {
  const [state, setState] = useContext(AppContext);

  console.log({ state });

  return (
    <div className="DashboardPage">
      <h2>DashboardPage</h2>
    </div>
  );
}

export default DashboardPage;
