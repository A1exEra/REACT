import "./App.css";
import Nav from "./Nav";
import Heading from "./Heading";
import GetTime from "./GetTime";
import Footer from "./Footer";
import List from "./List";

function App() {
  return (
    <div>
      <div className="main">
        <Nav />
        <Heading />
        <List />
        <GetTime />
      </div>
      <Footer />
    </div>
  );
}

export default App;
