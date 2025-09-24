import Button from '../Button'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <h3>Quer saber quanto fica sua <span>tatuagem</span>? Clique abaixo e fale direto com a artista no WhatsApp.</h3>
            <Button />
        </div>
    )
}