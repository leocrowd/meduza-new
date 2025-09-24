import styles from './Footer.module.css'
import { PiWhatsappLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiTiktokLogo } from "react-icons/pi";
import { PiShareNetwork } from "react-icons/pi";

export default function Footer() {

  const handleShare = async () => {

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title, 
          text: 'Confira o trabalho da Meduza - Estúdio de tatuagem & artes visuais', 
          url: window.location.href, // URL da página atual
        });
        console.log('Conteúdo compartilhado com sucesso!');
      } catch (error) {
        console.error('Erro ao compartilhar:', error);
      }
    } else {

      alert('Seu navegador não suporta a função de compartilhamento.');
    }
  };

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.socialLinks}>
          <a href="https://wa.me/5551999682076?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <PiWhatsappLogo size={45} />
          </a>

          <a href="https://www.instagram.com/meduza.artetattoo/?igsh=azg1aG5ldm1uZzd2#" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <PiInstagramLogo size={45} />
          </a>

          <a href="https://www.tiktok.com/@tattooraizaborda?_t=ZM-8zznKIkok3s&_r=1" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <PiTiktokLogo size={45} />
          </a>

          {/* O link de compartilhamento agora tem um onClick que chama a função */}
          <a href="#" className={styles.socialLink} onClick={handleShare}>
            <PiShareNetwork size={45} />
          </a>
        </div>

        <p className={styles.copy}>
          &copy; 2025 Todos os direitos reservados. <br /> Desenvolvido por
          <a href="https://nopx.com.br/" rel="noopener noreferrer"> NOPX</a>.
        </p>
      </div>
    </>
  );
}