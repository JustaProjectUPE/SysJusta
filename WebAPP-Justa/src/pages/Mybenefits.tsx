import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonList, IonRow, IonCard, IonCardContent, IonGrid, IonCardHeader, IonCol, IonCardTitle, IonButtons, IonBackButton} from '@ionic/react';
import './ForgotPassword.css';
import { mailOutline } from 'ionicons/icons';

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
    <IonContent className="register-product-content">
      <IonGrid className="register-product-section">
        <h1>Meus Benefícios</h1>
        <IonRow>
          <IonCol size="12">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Seu nível atual é: Super-herói</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
            
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