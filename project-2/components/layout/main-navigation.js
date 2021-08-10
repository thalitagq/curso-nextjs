import React from 'react'
import Link from 'next/link'
import styles from './main-navigation.module.css'
import Logo from './logo';
export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a href="">
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
