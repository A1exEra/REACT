import classes from "./Card.module.css";
// import './Card.css';
const Card = (props) => {
  // const classes = `card ${props.className}`
  // const childClasses = `${classes.card} ${props.className}`;
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;
