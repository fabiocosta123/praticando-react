import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";

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
      <Frase />
    </div>
  );
}

export default App;
