function SauceList({ sauces = [] }) {
  if (!sauces.length) {
    return null;
  }

  return (
    <div className="SauceList">
      <h4>Molhos</h4>
      <ul>
        {sauces.map((sauce) => (
          <li key={sauce}>{sauce}</li>
        ))}
      </ul>
    </div>
  );
}

export default SauceList;
