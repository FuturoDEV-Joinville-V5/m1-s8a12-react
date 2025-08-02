import "./CardGrid.css";

function CardGrid({ columns = 2, children }) {
  const columnsStyle = { gridTemplateColumns: `repeat(${columns}, 1fr)` };

  return (
    <div className="CardGrid" style={columnsStyle}>
      {children}
    </div>
  );
}

export default CardGrid;
