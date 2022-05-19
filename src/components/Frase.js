import styles from "./Frase.modules.css";

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>Esta frase é de um componente</p>
    </div>
  );
}

export default Frase;
