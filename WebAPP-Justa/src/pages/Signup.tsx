import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg} from '@ionic/react';
import './Signup.css';
import { lockClosedOutline, mailOutline, personOutline } from 'ionicons/icons';

const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <div className="titleicon">
          <img src = "/logo2.png"></img>
        </div>
          <IonMenu></IonMenu>
        </IonToolbar>
      </IonHeader>

      <IonContent className="background-signup">
        <div className="signup-section ion-padding">
          <div className="heading ion-padding">
            <h1>Crie sua conta</h1>
            <p>Insira os dados corretamente.</p>
          </div>
          <div className="login-form ion-padding">
          <div className="form-input">
              <IonItem>
                <IonLabel className = "labelInput" position="floating">Nome Completo</IonLabel>
                <IonInput className = "Input" type="email"></IonInput>
              </IonItem>
            </div>
            <div className="form-input">
              <IonItem>
                <IonLabel className = "labelInput" position="floating">CPF</IonLabel>
                <IonInput className = "Input" type="email"></IonInput>
              </IonItem>
            </div>
            <div className="form-input">
              <IonItem>
                <IonLabel className = "labelInput" position="floating">E-mail</IonLabel>
                <IonInput className = "Input" type="email"></IonInput>
              </IonItem>
            </div>
            <div className="form-input">
              <IonItem>
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

