import "./App.css";
import Nav from "./Nav";
import Note from "./Note";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <h1>Jacked Up And Good To Go!</h1>
        <Note />
      </div>
      <Footer />
    </div>
  );
}

export default App;
