import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonList, IonRow, IonCard, IonCardContent, IonGrid, IonCardHeader, IonCol, IonCardTitle, IonButtons, IonBackButton, IonProgressBar, IonicSlides} from '@ionic/react';
import './ForgotPassword.css';
import './Mybenefits.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

const Mybenefits: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
      <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>
        <div className="titleicon">
          <img src = "/logo2.png"></img>
        </div>
      </IonToolbar>
    </IonHeader>
    <IonContent className="benefits-content">
      <IonGrid className="benefits-section">
        <h1>Meus Benefícios</h1>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Seu nível atual é: Super-herói</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonLabel>Faltam 15489 XP para alcançar o próximo nível.</IonLabel>
                  <IonProgressBar value={.25} buffer={.5}></IonProgressBar>
                  <IonLabel id='subtitle-benefits'>Confira quais vantagens você tem acesso:</IonLabel>
                  <IonItem>
                  <Swiper className="swiper"
                    modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]}
                    autoplay={true}
                    keyboard={true}
                    pagination={true}
                    scrollbar={true}
                    zoom={true}>
                    <SwiperSlide>
                      <img src="./slide1.jpg"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./slide2.jpg"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./slide3.jpg"></img>
                    </SwiperSlide>
                  </Swiper>
                  </IonItem>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12">
          <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Missões</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    <IonItem>
                    <IonLabel>teste</IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
  );
};

export default Mybenefits;