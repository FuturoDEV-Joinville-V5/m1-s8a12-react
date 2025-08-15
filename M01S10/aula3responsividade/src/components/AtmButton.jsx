import Button from "@mui/material/Button";

export default function AtmButton({ onClick = () => {}, children }) {
  return (
    <Button variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
}
