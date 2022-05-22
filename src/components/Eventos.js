function Eventos() {
  function meuEvento() {
    console.log("Deu certo");
  }

  return (
    <div>
      <p>Clique para disparar um evento</p>
      <button onClick={meuEvento}>Ativar</button>
    </div>
  );
}

export default Eventos;
