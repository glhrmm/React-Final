import styles from './Inspiration.module.css';

const inspirationData = [
  { name: "Stylish", imgSrc: 'src/assets/Inspiration-Image/inspiration1.jpg', alt: 'Inspiration 1' },
  { name: "Confy", imgSrc: 'src/assets/Inspiration-Image/inspiration2.jpg', alt: 'Inspiration 2' },
  { name: "Traveller", imgSrc: 'src/assets/Inspiration-Image/inspiration3.jpg', alt: 'Inspiration 3' },
  { name: "Streetwear", imgSrc: 'src/assets/Inspiration-Image/inspiration4.jpg', alt: 'Inspiration 4' },
];

const Inspiration = () => {
  return (
    <section className={styles.inspirationSection}>
      <h2>Be Your Own Style</h2>
      <div className={styles.inspirationGrid}>
        {inspirationData.map((outfit, index) => (
          <div key={index} className={styles.inspirationOutfit}>
            <img src={outfit.imgSrc} alt={outfit.name} className={styles.outfitImage} />
            <div className={styles.outfitOverlay}>
              <p>{outfit.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inspiration;