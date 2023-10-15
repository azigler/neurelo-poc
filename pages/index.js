import React from "react"
import Link from "next/link"
import styles from "@styles/Layout.module.css"

export default function Home() {
  return (
    <main>
      <h1 className={styles.mockbuster}>Welcome to Mockbuster!</h1>
      <p>What would you like to browse?</p>

      <nav className={styles.links}>
        <Link href="/film">Films</Link>
        <Link href="/category">Categories</Link>
        <Link href="/actor">Actors</Link>
      </nav>
    </main>
  )
}
