import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card";
import data from "../info";
import DictionaryCard from "./DictionaryCard";
import emojipedia from "../emojipedia";
import Login from "./Form/Login";
import Counter from "./Counter/Counter";
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
        <Counter />
        <div className="formContainer">
          <Login />
        </div>
        <div>
          <h1>
            <span>emojipedia</span>
          </h1>
          <dl className="dictionary">
            {emojipedia.map((props) => {
              return (
                <DictionaryCard
                  key={props.id}
                  emoji={props.emoji}
                  name={props.name}
                  meaning={props.meaning}
                />
              );
            })}
          </dl>
        </div>
        <Note />
        <div>{data.map(createCard)}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
