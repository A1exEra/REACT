import "../index.css";
function Card(props) {
  return (
    <div class="card mb-3" style={{ width: "18rem" }}>
      <img src={props.src} class="card-img-top" alt="..." />
      <div class="card-body">
        <p>ID: {props.id}</p>
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.content}</p>
        <a href="/" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
export default Card;
