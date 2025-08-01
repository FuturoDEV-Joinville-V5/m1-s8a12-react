function MenuButton({ label, href }) {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  );
}

export default MenuButton;
