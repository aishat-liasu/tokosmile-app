import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import ActiveLink from '@/components/activelink';
import ProductCard from '@/components/productCard';
import Layout from '@/components/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tokosmile Mobile App</title>
        <meta name="description" content="Tokosmile Mobile App " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <form>
            <div>
              <img src="" alt="Search" />
              <input type="search" name="Seach" id="" placeholder="Search..." />
            </div>
          </form>
          <p>Cart</p>
          <p>Text</p>
        </header>
        <section className={styles.hero}>
          <div>
            <h2>#Fashion Day</h2>
            <p>80% OFF</p>
            <p>Discover Fashion that suits your style</p>
            <button>Chcek this out</button>
          </div>
        </section>
        <div className={styles.categories}>
          <h2>Categories</h2>
        </div>

        <div className={styles.bestSellingProducts}>
          <article>
            <h3>Best Sale Product</h3>
            <Link href="/">See More</Link>
          </article>

          <div className={styles.productList}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
              <Link href="/products">
                <ProductCard />
              </Link>
            ))}
          </div>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <ActiveLink href="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/#" scroll={false}>
                Voucher
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/#" scroll={false}>
                Wallet
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/#" scroll={false}>
                Settings
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
