import Image from 'next/image';
import styles from '@/styles/productCard.module.css';

export default function ProductCard() {
  return (
    <div className={styles.card}>
      <Image
        src="/images/t-shirt.png"
        alt="A classic Tshirt for males"
        width={400}
        height={400}
      />
      <article>
        <h2>Shirt</h2>
        <h3>Essential Men's Short-Sleeve CrewNeck T-shirt</h3>
        <div>
          <p>4.9 | 2539</p>
          <p>$32.00</p>
        </div>
      </article>
    </div>
  );
}
