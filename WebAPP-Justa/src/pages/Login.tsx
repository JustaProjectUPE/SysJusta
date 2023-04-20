import { IonButtons,IonItem, IonList, IonLabel, IonAvatar, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon, IonSearchbar, IonMenuToggle } from "@ionic/react";
import { arrowForwardOutline, notificationsOutline, settingsOutline, logOutOutline, receiptOutline, calendarOutline, barcodeOutline, sendOutline, cardOutline, calculatorOutline, trophyOutline, pricetagsOutline, hourglassOutline, statsChartOutline, shuffleOutline} from "ionicons/icons";
import './Login.css'
import { Balance } from "../components/Balance";
import { useState } from "react";
import axios from "axios";

const Signin = () =>{
  const [clientData, setClientData] = useState([""]);

  async function fetchData(client_tolken: number) {
    try{
      let res:any = await axios.get(`http://localhost:3000/menu/${client_tolken}`);
      setClientData(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  
    return(
      <>
        <IonMenu contentId="main-content">
          <section className="header-section" >
            <IonHeader>
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
              </IonToolbar>
            </IonHeader>
          </section>
          <section className="avatar-header">
            <IonItem lines="none">
              <IonAvatar slot="start">
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              </IonAvatar>
              <IonLabel>
              {`${clientData["name"]} ${clientData["surname"]}`}
                <p>Nível 3</p>
              </IonLabel>
              <div className="icon-hero"><img src = "/superhero.png"></img></div>
            </IonItem>
          </section>
          <IonSearchbar className="search-menu" showCancelButton="focus" placeholder="Pesquisar"></IonSearchbar>
          
          <IonContent>
            <IonList className="options-menu">
            <IonMenuToggle auto-hide="false">
                <IonItem lines="none">
                  <IonIcon icon={trophyOutline}></IonIcon>
                  <IonLabel>Meus benefícios</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle auto-hide="false">
                <IonItem lines="none">
                  <IonIcon icon={calendarOutline}></IonIcon>
                  <IonLabel>Agenda de Recebíveis</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="none">
                <IonIcon icon={barcodeOutline}></IonIcon>
                  <IonLabel>Pagar Boleto</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="none">
                <IonIcon icon={sendOutline}></IonIcon>
                  <IonLabel>Linkou</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="none">
                <IonIcon icon={cardOutline}></IonIcon>
                  <IonLabel>Crédito Justo</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="none">
                <IonIcon icon={calculatorOutline}></IonIcon>
                  <IonLabel>Simulador de Vendas</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="none">
                <IonIcon icon={statsChartOutline}></IonIcon>
                  <IonLabel>Estatística de Desempenho</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="none">
                <IonIcon icon={hourglassOutline}></IonIcon>
                  <IonLabel>Vendas em Tempo Real</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="none">
                <IonIcon icon={shuffleOutline}></IonIcon>
                  <IonLabel>Transferência de Vendas</IonLabel>
                </IonItem>
              </IonMenuToggle>

            </IonList>
          </IonContent>
          </IonMenu>

        <IonPage id="main-content" onLoad={()=>{fetchData(1)}}>
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
                  <IonCardSubtitle>Nível de lealdade: 3</IonCardSubtitle>
                  <IonCardTitle>SUPER-HERÓI</IonCardTitle>
                  <IonButton fill="clear">
                    Acesse os benefícios
                    <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
                  </IonButton>
                </IonCardHeader>
              </IonCard>
              <Balance/>
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