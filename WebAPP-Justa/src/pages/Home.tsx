import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonMenuButton, IonButtons} from '@ionic/react';
import './Home.css';
import { lockClosedOutline, mailOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <div className="titleicon">
          <img src = "/fundo.png"></img>
        </div>
          <IonMenu></IonMenu>
        </IonToolbar>
      </IonHeader>

      <IonContent class="backgroundHome">
        <div className="login-section ion-padding">
          <div className="heading ion-padding">
            <h1>Olá, seja bem-vindo(a) de volta!</h1>
            <p>Faça o seu login para continuar.</p>
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
            <IonButton size="default" class="login-button" routerLink="/signin">Entrar</IonButton>
            <p>Esqueceu a sua senha?</p>
            <IonButton id="signup-button" size="default" fill="outline" routerLink="/signup">Cadastre-se</IonButton>
          </div>
        </div>
      </IonContent>

    </IonPage>
  );
};

export default Home;

