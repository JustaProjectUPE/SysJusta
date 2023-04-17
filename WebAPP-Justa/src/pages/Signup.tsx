import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg} from '@ionic/react';
import './Home.css';
import { lockClosedOutline, mailOutline } from 'ionicons/icons';

const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Justa</IonTitle>
          <IonMenu></IonMenu>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="login-section ion-padding">
          <div className="heading ion-padding">
            <h1>Crie sua conta</h1>
            <p>Insira os dados corretamente.</p>
          </div>
          <div className="login-form ion-padding">
            <div className="form-input">
              <IonItem>
                <IonIcon className="iconsInput" icon={mailOutline}></IonIcon>
                <IonLabel className = "labelInput" position="floating">E-mail</IonLabel>
                <IonInput className = "Input" type="email"></IonInput>
              </IonItem>
            </div>
            <div className="form-input">
              <IonItem>
                <IonIcon className="iconsInput" icon={lockClosedOutline}></IonIcon>
                <IonLabel className = "labelInput" position="floating">Senha</IonLabel>
                <IonInput className = "Input" type="password"></IonInput>
              </IonItem>
            </div>
          </div>
          <div className="action-button ion-padding">
            <IonButton size="default" class="login-button" routerLink="/home">Criar</IonButton>
          </div>
        </div>
      </IonContent>

    </IonPage>
  );
};

export default Signup;

