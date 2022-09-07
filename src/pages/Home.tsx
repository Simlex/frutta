import { IonContent, IonHeader, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
// import './Home.css';
import style from './Home.module.scss';
import axios from 'axios';

const Home: React.FC = ( ) => {
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>( [] );

  useEffect(() => {
    setLoading(true)
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class={style.ionToolbar} color='primary'>
          <div className={style.container}>
            {/* <IonTitle class={style.iontitle}>
              <img src='../../public/assets/fruit_img.png' alt='Orange fruit' />
            </IonTitle> */}
            <div className={style.title}>Home</div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        {loading && <div><h2>Loading...</h2></div>}
        <div className={style.favouriteSection}>
          <h4 className={style.favouriteSection__header}>Explore</h4>
          <div className={style.productContainer}>
            <>
            {data.map((product: { id: Key | null | undefined; image: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
              <div className={style.productContainer__eachProduct} key={product.id}>
                <div className={style.image}>
                  <img src={product.image} alt='' />
                </div>
                <div className={style.details}>
                  <div className={style.productDetails}>
                    <p className={style.productDetails__name}>{product.title}</p>
                    <p className={style.productDetails__price}>$<span>{product.price}</span></p>
                  </div>
                  <div className={style.addCart}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 0C9.29837 0 9.58452 0.118527 9.7955 0.329505C10.0065 0.540484 10.125 0.826631 10.125 1.125V7.875H16.875C17.1734 7.875 17.4595 7.99353 17.6705 8.20451C17.8815 8.41548 18 8.70163 18 9C18 9.29837 17.8815 9.58452 17.6705 9.7955C17.4595 10.0065 17.1734 10.125 16.875 10.125H10.125V16.875C10.125 17.1734 10.0065 17.4595 9.7955 17.6705C9.58452 17.8815 9.29837 18 9 18C8.70163 18 8.41548 17.8815 8.20451 17.6705C7.99353 17.4595 7.875 17.1734 7.875 16.875V10.125H1.125C0.826631 10.125 0.540484 10.0065 0.329505 9.7955C0.118527 9.58452 0 9.29837 0 9C0 8.70163 0.118527 8.41548 0.329505 8.20451C0.540484 7.99353 0.826631 7.875 1.125 7.875H7.875V1.125C7.875 0.826631 7.99353 0.540484 8.20451 0.329505C8.41548 0.118527 8.70163 0 9 0V0Z" fill="black" />
                    </svg>
                  </div>
                </div>
              </div>
            })}
            <div className={style.productContainer__eachProduct}>
              <div className={style.image}>
                <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='' />
              </div>
              <div className={style.details}>
                <div className={style.productDetails}>
                  <p className={style.productDetails__name}>Name of product</p>
                  <p className={style.productDetails__price}>$<span>1200</span></p>
                </div>
                <div className={style.addCart}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0C9.29837 0 9.58452 0.118527 9.7955 0.329505C10.0065 0.540484 10.125 0.826631 10.125 1.125V7.875H16.875C17.1734 7.875 17.4595 7.99353 17.6705 8.20451C17.8815 8.41548 18 8.70163 18 9C18 9.29837 17.8815 9.58452 17.6705 9.7955C17.4595 10.0065 17.1734 10.125 16.875 10.125H10.125V16.875C10.125 17.1734 10.0065 17.4595 9.7955 17.6705C9.58452 17.8815 9.29837 18 9 18C8.70163 18 8.41548 17.8815 8.20451 17.6705C7.99353 17.4595 7.875 17.1734 7.875 16.875V10.125H1.125C0.826631 10.125 0.540484 10.0065 0.329505 9.7955C0.118527 9.58452 0 9.29837 0 9C0 8.70163 0.118527 8.41548 0.329505 8.20451C0.540484 7.99353 0.826631 7.875 1.125 7.875H7.875V1.125C7.875 0.826631 7.99353 0.540484 8.20451 0.329505C8.41548 0.118527 8.70163 0 9 0V0Z" fill="black" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={style.productContainer__eachProduct}>
              <div className={style.image}>
                <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='' />
              </div>
              <div className={style.productDetails}>
                <h3>Name of product</h3>
                <p className={style.productDetails__price}>1200</p>
              </div>
            </div>
            <div className={style.productContainer__eachProduct}>
              <div className={style.image}>
                <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='' />
              </div>
              <div className={style.productDetails}>
                <h3>Name of product</h3>
                <p className={style.productDetails__price}>1200</p>
              </div>
            </div>
            <div className={style.productContainer__eachProduct}>
              <div className={style.image}>
                <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='' />
              </div>
              <div className={style.productDetails}>
                <h3>Name of product</h3>
                <p className={style.productDetails__price}>1200</p>
              </div>
            </div>
            <div className={style.productContainer__eachProduct}>
              <div className={style.image}>
                <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='' />
              </div>
              <div className={style.productDetails}>
                <h3>Name of product</h3>
                <p className={style.productDetails__price}>1200</p>
              </div>
            </div></>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
