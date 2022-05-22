import { useState } from "react";

function Form() {
  function Login(e) {
    e.preventDefault(); //para a execução da pagina e mostra o que está abaixo
    console.log(`Usuario: ${email}
     senha: ${password}`);
  }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <form onSubmit={Login}>
      <div>
        <label htmlFor="email">e-mail:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="password">senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <input type="submit" value="Cadastrar"></input>
      </div>
    </form>
  );
}

export default Form;
