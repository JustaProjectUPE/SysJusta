import { IonButtons, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import './Login.css'
import { Balance } from "../components/balance";

const Signin = () =>{
  let balance = 1;

    return(
        <>
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu Content</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="background-menu ion-padding">This is the menu content.</IonContent>
        </IonMenu>
        <IonPage id="main-content">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle>Menu</IonTitle>
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
              <Balance balance={balance}/>
              <section className="products-sec">
                <IonTitle >Produtos</IonTitle>
                <div className='products'>
                  <IonButton shape='round' size='large'>
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