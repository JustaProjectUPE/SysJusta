import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg} from '@ionic/react';
import './ForgotPassword.css';
import { mailOutline } from 'ionicons/icons';

const ForgotPassword: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <div className="titleicon">
          <img src = "/logo2.png"></img>
        </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="background-forgotpass">
        <div className="forgotpass-section ion-padding">
          <div className="heading ion-padding">
            <h1>Esqueci minha senha</h1>
            <p>
                Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos
                um link com as instruções.
            </p>
          </div>
          <div className="form ion-padding">
              <IonItem>
                <IonIcon id="iconForgot" icon={mailOutline}></IonIcon>
                <IonLabel className="labelForgotpass" position="floating">E-mail</IonLabel>
                <IonInput id="in-email" color="medium" type="email"></IonInput>
              </IonItem>
          </div>
          <div className="action-button ion-padding">
            <IonButton size="default" id="send-button" routerLink="/home">Enviar</IonButton>
          </div>
        </div>
      </IonContent>

    </IonPage>
  );
};

export default ForgotPassword;