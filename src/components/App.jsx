import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Input from "./Input";
import Note from "./Note";
import Footer from "./Footer";
// import notes from "../notes";
function App() {
  const [toDos, setToDos] = useState([]);

  function addToDo(toDo) {
    setToDos((prevValue) => [...prevValue, toDo]);
    console.log(toDos);
  }

  function deleteItem(index) {
    setToDos((prevValue) => [
      ...prevValue.filter((el, idx) => {
        return idx !== index;
      }),
    ]);
  }

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <h1>Jacked Up And Good To Go!</h1>
        <Input onAddToDo={addToDo} />
        {toDos.map((el, id) => (
          <Note
            key={id}
            id={id}
            title={el.title}
            content={el.content}
            onDelete={deleteItem}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
