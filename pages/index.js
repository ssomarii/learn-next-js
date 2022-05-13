//import Head from 'next/head'
//import Image from 'next/image'
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Head from "next/head";

function Home() {
  return (
      <div className={styles.content}>
          <Head>
              <title>Main Page</title>
          </Head>
          <div className={styles.content__title}>
              Список страниц
          </div>
          <div className={styles.content__list}>
              <Link href="/first">
                  <a className={styles.content__link}>Первая страница</a>
              </Link>
              <Link href="/second">
                  <a className={styles.content__link}>Вторая страница</a>
              </Link>
              <Link href="/third">
                  <a className={styles.content__link}>Третья страница</a>
              </Link>
          </div>
      </div>
  )
}

export default Home