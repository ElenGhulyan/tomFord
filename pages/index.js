import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


export const getStaticProps = async () => {
    const res = await fetch('http://localhost:5000/home-categories');
    const data = await res.json();

    return {
        props: { homeCategories: data }
    }
}




const Home = ({homeCategories}) => {

  return (
    <>
      <Head>
        <title>Жирные бургеры | Главная</title>
        <meta name="title" content="Жирные бургеры"/>
      </Head>
      <div className={styles.container}>

          {homeCategories.map(homeCategory => (
              <NavLink to={`/home-category/${homeCategory.id}`} key={homeCategory.id}>
                      <div>
                          <Image
                              src={`${homeCategory.image}`}
                              alt={`${homeCategory.title}`}
                              width="250"
                              height="150"
                              layout="responsive"
                              objectFit="cover"
                          />
                      </div>
                      <div>
                          <h3>{ homeCategory.title }</h3>
                          <p>{ homeCategory.sub_title }</p>
                      </div>
              </NavLink>
          ))}



      </div>
    </>
  );
}

export default Home;