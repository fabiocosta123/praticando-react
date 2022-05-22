import Button from "./evento/Button";

function Eventos() {
  function meuEvento() {
    console.log("Deu certo, primeiro evento");
  }

  return (
    <div>
      <p>Clique para disparar um evento</p>
      <Button event={meuEvento} text="Primeito Evento" />
    </div>
  );
}

export default Eventos;
