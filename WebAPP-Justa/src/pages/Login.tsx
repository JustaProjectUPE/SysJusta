import { IonButtons,IonItem, IonList, IonLabel, IonAvatar, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon } from "@ionic/react";
import { arrowForwardOutline, notificationsOutline, settingsOutline, logOutOutline} from "ionicons/icons";
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
          <IonContent className="options-menu">
            <IonList>
              <IonItem lines="none">
                <IonLabel>Opção 1</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Opção 2</IonLabel>
              </IonItem>
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