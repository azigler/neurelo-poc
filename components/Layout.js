import Context from "@components/Context"
import Head from "next/head"
import React from "react"
import styles from "@styles/Layout.module.css"
import Link from "next/link"

export default function Layout({ children }) {
  const { mbContext } = React.useContext(Context)

  if (mbContext && mbContext.categories) {
    return (
      <>
        <Head>
          <title>Neurelo + PostgreSQL + Next.js + Netlify</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/film">Films</Link>
          <Link href="/category">Categories</Link>
          <Link href="/actor">Actors</Link>
        </nav>
        {children}
        <a
          href="https://github.com/azigler/neurelo-poc"
          className={styles.footer}
        >
          Made with ❤️ by Andrew Zigler
        </a>
      </>
    )
  } else {
    return <div className={styles.loader}>Loading...</div>
  }
}
