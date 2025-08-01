import "./MenuButton.css";

function MenuButton({ label, page }) {
  return (
    <li className="MenuButton">
      <a href={`#${page}`}>{label}</a>
    </li>
  );
}

export default MenuButton;
