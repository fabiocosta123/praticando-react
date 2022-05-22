import Item from "./Item";
function Lista() {
  return (
    <div>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" lancamento={2022}></Item>
        <Item marca="Honda" lancamento={2005}></Item>
        <Item marca="Toyota" lancamento={2014}></Item>
      </ul>
    </div>
  );
}

export default Lista;
