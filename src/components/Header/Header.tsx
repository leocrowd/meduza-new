import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.containerImg}>
        <img
          className={styles.image}
          src="./public/logo.png"
          alt="logo Meduza Lab"
        />
      </div>

      <h3>Estudio de tatuagem <br /> <span>&</span> artes visuais</h3>
      <p className={styles.colored}>
        Blackwork | Fineline | Pontilhismo | Floral
      </p>
      <p>Criando na pele e além</p>
    </div>
  );
}
