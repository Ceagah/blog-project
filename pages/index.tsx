import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}

export default Home
