import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Burgers.module.css';
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/burgers');
  const data = await res.json();

  return {
    props: { burgers: data }
  }
}

const Burgers = ({ burgers}) => {
  return (
      <>
        <Head>
          <title>Burgers Жирные бургеры | Главная</title>
          <meta name="title" content="Жирные бургеры"/>
        </Head>
        <div>
          <h1>Наши Бургеры</h1>
          {burgers.map(burger => (
              <Link href={`/burgers/${burger.id}`} key={burger.id}>
                <div className={styles.imageContainer}>
                  <Image
                      src={`${burger.image}`}
                      alt={`${burger.name}`}
                      width="250"
                      height="250"
                      layout="responsive"
                      objectFit="cover"
                  />
                </div>
                <div>
                  <h3>{ burger.name }</h3>
                  <p>{ burger.desc }</p>
                </div>
              </Link>
          ))}
        </div>
      </>

  );
}
 
export default Burgers;