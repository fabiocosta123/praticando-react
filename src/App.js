import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Empresa from "./components/Empresa";
import Contato from "./components/Contato";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Empresa">
            <Empresa />
          </Route>
          <Route path="/Contato">
            <Contato />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
