import React from "react";
import classes from "./Modal.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ReactDOM from "react-dom";
// import Wrapper from "../Helpers/Wrapper";
const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onCloseModal} />
);
const ModalError = (props) => {
  return (
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
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {/* <div className={classes.backdrop} /> */}
      {/* <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.content}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onCloseModal}>OK</Button>
        </footer>
      </Card> */}
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalError
          title={props.title}
          content={props.content}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};
export default Modal;
