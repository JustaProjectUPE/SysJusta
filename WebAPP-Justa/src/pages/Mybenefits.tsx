import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonList, IonRow, IonCard, IonCardContent, IonGrid, IonCardHeader, IonCol, IonCardTitle, IonButtons, IonBackButton, IonProgressBar, IonicSlides, IonCheckbox} from '@ionic/react';
import './ForgotPassword.css';
import './Mybenefits.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

interface ClientData {
  name: string;
  surname: string;
}

const Mybenefits: React.FC = () => {
  const [clientData, setClientData] = useState<ClientData>({ name: "", surname: ""});
  const location = useLocation();
  const navigate = useNavigate();

  async function fetchData(client_tolken: number) {
    try{
      let res:any = await axios.get(`http://localhost:3000/menu/${client_tolken}`);
      setClientData(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  function checkLevel(level: number){
    if(level == 1){
      return 'HERÓI INICIANTE'
    } else if(level == 2){
      return 'HERÓI DE CARREIRA'
    } else if(level == 3) {
      return 'SUPER-HERÓI'
    }
    else if(level == 4){
      return 'HERÓI ÉPICO'
    }
    else if(level == 5){
      return 'HERÓI LENDÁRIO'
    }
  }
  return (
    <IonPage onLoad={()=>{fetchData(location.state.id)}}>
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
                  <IonCardTitle>Seu nível é: Herói Épico</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonLabel>Faltam 54489 XP para alcançar o próximo nível.</IonLabel>
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
                  <IonCardTitle>Missões Mensais</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    <IonItem>
                    <IonCheckbox labelPlacement="start">Abra uma conta de poupança de longo prazo. <p>500xp</p></IonCheckbox>
                    </IonItem>
                    <IonItem>
                    <IonCheckbox labelPlacement="start">Faça um investimento em um produto financeiro. <p>1000xp</p></IonCheckbox>
                    </IonItem>
                    <IonItem>
                    <IonCheckbox labelPlacement="start">Pague a fatura do cartão integralmente. <p>1700xp</p></IonCheckbox>
                    </IonItem>
                    <IonItem>
                    <IonCheckbox labelPlacement="start">Faça duas transferências para outra conta bancária. <p>700xp</p></IonCheckbox>
                    </IonItem>
                    <IonItem>
                    <IonCheckbox labelPlacement="start">Mantenha os gastos dentro do limite mensal estabelecido. <p>1500xp</p></IonCheckbox>
                    </IonItem>
                    <IonItem>
                    <IonCheckbox labelPlacement="start">Faça uma transferência internacional de dinheiro. <p>2500xp</p></IonCheckbox>
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