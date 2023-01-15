import "./App.css";
import Nav from "./Nav";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <h1>Jacked Up And Good To Go!</h1>
        {notes.map((el) => (
          <Note key={el.key} title={el.title} content={el.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
