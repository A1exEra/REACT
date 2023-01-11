import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Note from "./Note";
function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Note />
      </div>
      <Footer />
    </div>
  );
}

export default App;
