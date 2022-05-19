import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  const nome = ["Fábio"];
  return (
    <div className="App">
      <SayMyName nome={nome} />
      <Pessoa
        nome="Fábio"
        idade="38"
        profissao="Desenvolvedor"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
