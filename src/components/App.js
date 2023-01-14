import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card";
import data from "../info";
///////////////////////////////////
function createCard(props) {
  return (
    <Card
      key={props.id}
      src={props.src}
      title={props.title}
      content={props.content}
      id={props.id}
    />
  );
}
function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Note />
        <div>
          {data.map(createCard)}
          {/* <Card
            src={data[0].src}
            title={data[0].title}
            content={data[0].content}
          />
          <Card
            src={data[1].src}
            title={data[1].title}
            content={data[1].content}
          />
          <Card
            src={data[2].src}
            title={data[2].title}
            content={data[2].content}
          /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
