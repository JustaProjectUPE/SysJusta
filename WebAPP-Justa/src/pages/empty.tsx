import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg} from '@ionic/react';
import './ForgotPassword.css';

const Empty: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <div className="titleicon">
                <img src = "/logo2.png"></img>
            </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Empty;