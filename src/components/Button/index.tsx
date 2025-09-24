import styles from './Button.module.css'

export default function Button() {
    return (
        <button className={styles.btn}>
            <a href="https://wa.me/5551999682076?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">Pedir Orçamento</a>
        </button>
    )
}