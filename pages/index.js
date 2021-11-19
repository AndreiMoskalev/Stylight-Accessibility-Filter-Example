import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import Catalog from '../components/Catalog';
import productsMock from '../constants/items.json';

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
        <section className={styles.grid}>
          {productsMock.map((item, index) => (
            <Catalog
              key={index}
              name={item.name}
              brand={item.brand}
              src={item.image}
              meta={item.meta}
              price={item.price}
            />
          ))}
        </section>
        <div>
        </div>
      </section>
    </>
  )
}
