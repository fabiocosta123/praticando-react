import "./App.css";
import { useState } from "React";
import SeuNome from "./components/SeuNome";
import Saudacao from "./components/Saudacao";

function App() {
  const [nome, SetNome] = useState();
  return (
    <div className="App">
      <h1>Setlif</h1>
      <SeuNome setNome={SetNome} />
      <Saudacao nome={nome} />
    </div>
  );
}

export default App;
