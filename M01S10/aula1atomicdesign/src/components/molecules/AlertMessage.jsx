import Button from "../atoms/Button";
import Typografy from "../atoms/Typografy";

export default function AlertMessage({ type, title, message, onClose }) {
  return (
    <div className="AlertMessage">
      <div>
        <Typografy text={title} variant="h1" />
        <Typografy text={message} />
      </div>
      {onClose && <Button variant={type} text="x" onClick={onClose} />}
    </div>
  );
}
