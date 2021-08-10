import React from 'react'
import Image from 'next/image'
import styles from './logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <Image src="/images/site/paragon.png" width={50} height={50}/>
      <p className={styles.logo}>THE PARAGON BULLETIN</p>
    </div>
  );
}
