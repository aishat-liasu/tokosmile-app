import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/products.module.css';
import Layout from '@/components/layout';

export default function ProductPage() {
  return (
    <>
      <Head>
        <title>Tokosmile Mobile App</title>
        <meta name="description" content="Tokosmile Mobile App " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.product}>
        <header className={styles.header}>
          <Link href="/">&lt;</Link>

          <span>
            <button>Like</button>
            <button>Share</button>
            <button>Cart</button>
          </span>
        </header>
        <Image
          src="/images/t-shirt.png"
          alt="A classic Tshirt for males"
          width={400}
          height={400}
        />
        <article>
          <h2>Shirt</h2>
          <h3>Essential Men's Short-Sleeve CrewNeck T-shirt</h3>
          <p>4.9 Ratings . 2.3k Reviews . 2.9k+ sold</p>
        </article>

        <footer className={styles.footer}>
          <article>
            <h3>Total Price</h3>
            <p>$32.00</p>
          </article>

          <span>
            <button>Cart</button>
            <button>Buy Now</button>
          </span>
        </footer>
      </div>
    </>
  );
}
