import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image src="/stylight.svg" width={100} height={64} /> 
      </header>
      <section className={styles.section}>
        SECTION ONE
      </section>
      <section className={styles.section}>
        SECTION TWO
      </section>
    </> 
  )
}
