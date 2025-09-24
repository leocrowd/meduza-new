import products from "../.././assets/products.json";
import styles from "./Products.module.css";
import { useState } from "react";

export default function Catalog() {
  const phone = "5551999682076";

  // Pegar categorias únicas
  const categories = [
    ...new Map(products.map((p) => [p.category, p.categoryImage])).entries(),
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : [];

  return (
    <div>
      <h2 className={styles.main}>Produtos</h2>
      {/* Categorias */}
      {!selectedCategory && (
        <div className={styles.categories}>
          {categories.map(([category, image]) => (
            <div
              key={category}
              className={styles.categoryCard}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setSelectedCategory(category)}
            >
              <h2>{category}</h2>
            </div>
          ))}
        </div>
      )}

      {/* Produtos */}
      {selectedCategory && (
        <div>
          <button
            className={styles.backBtn}
            onClick={() => setSelectedCategory(null)}
          >
            Voltar
          </button>
          <div className={styles.products}>
            {filteredProducts.map((product) => {
              const message = `Olá, quero saber mais sobre o produto: ${product.title}`;
              const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
                message
              )}`;

              return (
                <div key={product.id} className={styles.card}>
                  <img
                    src={product.image}
                    alt={product.title}
                    onClick={() => setFullscreenImage(product.image)}
                  />
                  <div className={styles.cardInfo}>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <div className={styles.shop}>
                      <span>{product.price}</span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quero comprar
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tela cheia */}
      {fullscreenImage && (
        <div
          className={styles.fullscreen}
          onClick={() => setFullscreenImage(null)}
        >
          <div
            className={styles.fullscreenContent}
            onClick={(e) => e.stopPropagation()} // impede fechar ao clicar na imagem
          >
            <button
              className={styles.closeBtn}
              onClick={() => setFullscreenImage(null)}
            >
              ×
            </button>
            <img src={fullscreenImage} alt="Fullscreen" />
          </div>
        </div>
      )}
    </div>
  );
}
