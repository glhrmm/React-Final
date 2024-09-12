import styles from './Inspiration.module.css';

const inspirationData = [
  { imgSrc: 'src/assets/Inspiration-Image/inspiration1.jpg', alt: 'Inspiration 1' },
  { imgSrc: 'src/assets/Inspiration-Image/inspiration2.jpg', alt: 'Inspiration 2' },
  { imgSrc: 'src/assets/Inspiration-Image/inspiration3.jpg', alt: 'Inspiration 3' },
  { imgSrc: 'src/assets/Inspiration-Image/inspiration4.jpg', alt: 'Inspiration 4' },
];

const Inspiration = () => {
  return (
    <section className={styles.inspirationSection}>
      <h2>Clever designs, delivered free</h2>
      <div className={styles.inspirationGrid}>
        {inspirationData.map((item, index) => (
          <div key={index} className={styles.inspirationItem}>
            <img src={item.imgSrc} alt={item.alt} />
          </div>
        ))} 
      </div>
    </section>
  );
};

export default Inspiration;