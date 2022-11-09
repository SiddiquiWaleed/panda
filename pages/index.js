import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <ul className={styles.navbar}>
          <li className={styles.navlist}>
            Home
          </li>
          <li className={styles.navlist}>
            About Us
          </li>
          <li className={styles.navlist}>
            Contact
          </li>
          <li className={styles.navlist}>
            Blogs
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>
        <p className={styles.description}>
          A blog for hunting coders from coder.
        </p>

        <div>
          <ul className={styles.blogposts}>
            <li>
              <h3 className={styles.blogpost}>
                How to learn Javascript in 2022?
              </h3>
              <p>Javascript is a language used to build logic for webapps</p>
            </li>
            <li>
              <h3 className={styles.blogpost}>
                How to learn Javascript in 2022?
              </h3>
              <p>Javascript is a language used to build logic for webapps</p>
            </li>
            <li>
              <h3 className={styles.blogpost}>
                How to learn Javascript in 2022?
              </h3>
              <p>Javascript is a language used to build logic for webapps</p>
            </li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
