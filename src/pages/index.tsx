import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The BLOG - project</title>
        <meta name="description" content="A blog, created with next.js to learn about it" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">
              <a className={styles.navLink}><Image src="/umbrela_logo.png" alt="The BLOG" width={50} height={50} /></a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/">
              <a className={styles.navLink}>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/categories">
              <a className={styles.navLink}>Categories</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">
              <a className={styles.navLink}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <section className={styles.parallaxImage}>
      </section>
    </div>
  )
}

export default Home
