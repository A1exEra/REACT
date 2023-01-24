import classes from "./Modal.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.content}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onCloseModal}>OK</Button>
        </footer>
      </Card>
    </div>
  );
};
export default Modal;
