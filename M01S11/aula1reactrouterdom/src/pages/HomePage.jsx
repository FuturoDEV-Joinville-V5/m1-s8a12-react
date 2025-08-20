import { useContext } from "react";
import { AppContext } from "../AppContext";

function HomePage() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div className="HomePage">
      <p>HomePage tema: {theme}</p>
      <button onClick={toggleTheme}>TrocaTema</button>
    </div>
  );
}

export default HomePage;
