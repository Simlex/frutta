import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import './Home.css';
import style from './Home.module.scss';
import img from '../../public/assets/shapes.svg';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class={style.ionToolbar} color='primary'>
          <div className={style.container}>
            <IonTitle class={style.iontitle}>
              <img src='../../public/assets/shapes.svg' />
            </IonTitle>
            <div className={style.title}>Home</div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
