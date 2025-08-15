import Button from "@mui/material/Button";

export default function AtmButton({ onClick = () => {} }) {
  return (
    <Button variant="contained" onClick={onClick}>
      Clique aqui
    </Button>
  );
}
