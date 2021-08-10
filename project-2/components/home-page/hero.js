import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/shepard.jpeg"
          alt="An image shpwing commander Shepard"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Shepard</h1>
      <p>
        I blog about my crew quest to stop the rogue Spectre Saren Arterius from
        leading an army of sentient machines, called the Geth, to conquer the
        galaxy.
      </p>
    </section>
  );
}
