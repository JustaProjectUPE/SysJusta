import { IonButtons,IonItem, IonList, IonLabel, IonAvatar, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon, IonSearchbar, IonMenuToggle, IonNavLink } from "@ionic/react";
import { arrowForwardOutline, notificationsOutline, settingsOutline, logOutOutline, calendarOutline, barcodeOutline, sendOutline, cardOutline, calculatorOutline, trophyOutline, hourglassOutline, statsChartOutline, shuffleOutline, addCircleOutline} from "ionicons/icons";
import './Login.css'
import { Balance } from "../components/Balance";
import { useState } from "react";
import axios from "axios";
import Register from "./Register";
import Received from "./received";
import { useLocation } from "react-router-dom";

const Signin = () =>{
  const [clientData, setClientData] = useState([""]);
  const location = useLocation();

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
  }
 
    return(
      <>
        <IonMenu contentId="main-content">
          <section className="header-section" >
            <IonHeader class="ion-no-border">
              <IonToolbar>
                <div className="buttons-header">
                  <IonButton id="settings" fill="clear">
                    <IonIcon icon={settingsOutline} slot="end"></IonIcon>
                  </IonButton>
                  <IonButton id="notify"  fill="clear">
                    <IonIcon icon={notificationsOutline} slot="end"></IonIcon>
                  </IonButton>
                  <IonButton id="logout" fill="clear" routerLink="/home">
                    <IonIcon icon={logOutOutline} slot="start"></IonIcon> Sair
                  </IonButton>
                </div>
                <IonAvatar className="icon-avatar">
                  <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel className="label-avatar">
                  <div id="nome-user">{`${clientData["name"]} ${clientData["surname"]}`}</div>
                    <p>Nível {location.state.loyalty}</p>
                    <div><img src="/icon-superhero.png"></img></div>
                </IonLabel>
              </IonToolbar>
            </IonHeader>
          </section>

          <IonContent className="body-menu">
          <IonSearchbar className="search-menu" showCancelButton="focus" placeholder="Pesquisar"></IonSearchbar>
            <IonList className="options-menu">
            <IonMenuToggle auto-hide="false">
                <IonItem lines="full" routerLink="/mybenefits">
                  <IonIcon icon={trophyOutline}></IonIcon>
                  <IonLabel>Meus Benefícios</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle auto-hide="false">
              <IonNavLink routerDirection="forward" component={() => <Received />}>
                <IonItem lines="full" routerLink="/received">
                  <IonIcon icon={calendarOutline}></IonIcon>
                  <IonLabel>Agenda de Recebíveis</IonLabel>
                </IonItem>
                </IonNavLink>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="full">
                <IonIcon icon={barcodeOutline}></IonIcon>
                  <IonLabel>Pagar Boleto</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
              <IonNavLink routerDirection="forward" component={() => <Register />}>
                <IonItem lines="full" routerLink="/register">
                <IonIcon icon={addCircleOutline}></IonIcon>
                  <IonLabel>Cadastros</IonLabel>
                </IonItem>
                </IonNavLink>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="full">
                <IonIcon icon={sendOutline}></IonIcon>
                  <IonLabel>Linkou</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="full">
                <IonIcon icon={cardOutline}></IonIcon>
                  <IonLabel>Crédito Justo</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="full" routerLink="/simulator">
                <IonIcon icon={calculatorOutline}></IonIcon>
                  <IonLabel>Simulador de Vendas</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="full">
                <IonIcon icon={statsChartOutline}></IonIcon>
                  <IonLabel>Estatística de Desempenho</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="full">
                <IonIcon icon={hourglassOutline}></IonIcon>
                  <IonLabel>Vendas em Tempo Real</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="full">
                <IonIcon icon={shuffleOutline}></IonIcon>
                  <IonLabel>Transferência de Vendas</IonLabel>
                </IonItem>
              </IonMenuToggle>

            </IonList>
          </IonContent>
          </IonMenu>

        <IonPage id="main-content" onLoad={()=>{fetchData(location.state.id)}}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton>
                </IonMenuButton>
              </IonButtons>
              <div className="titleicon">
                <img src = "/logo2.png"></img>
              </div>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <main>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Nível de lealdade: {location.state.loyalty}</IonCardSubtitle>
                  <IonCardTitle>{checkLevel(location.state.loyalty)}</IonCardTitle>
                  <IonButton fill="clear">
                    Acesse os benefícios
                    <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
                  </IonButton>
                </IonCardHeader>
              </IonCard>
              <Balance balance={clientData["finance"]}/>
              <section className="products-sec">
                <IonTitle >Produtos</IonTitle>
                <div className='products'>
                  <IonButton shape='round' size='large' onClick={()=>{fetchData(0)}}>
                    <IonIcon slot='icon-only' ></IonIcon>
                  </IonButton>
                  <IonButton shape='round' size='large'>
                    <IonIcon slot='icon-only' ></IonIcon>
                  </IonButton>
                  <IonButton shape='round' size='large'>
                    <IonIcon slot='icon-only'></IonIcon>
                  </IonButton>
                  <IonButton shape='round' size='large'>
                    <IonIcon slot='icon-only' ></IonIcon>
                  </IonButton>
                  <IonButton shape='round' size='large'>
                    <IonIcon slot='icon-only'></IonIcon>
                  </IonButton>
                  <IonButton shape='round' size='large'>
                    <IonIcon slot='icon-only'></IonIcon>
                  </IonButton>
                </div>
              </section>
            </main>
          </IonContent>
        </IonPage>
      </>
    );
}

export default Signin