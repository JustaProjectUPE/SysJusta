import { IonButtons, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonContent } from "@ionic/react";
import './Login.css';

const Signin = () =>{
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
        </IonPage>
      </>
    );
}

export default Signin