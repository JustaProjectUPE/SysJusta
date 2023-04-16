import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonLabel, IonItem, IonInput, IonButton } from '@ionic/react';
import './Home.css';
import {} from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>

      <IonHeader collapse="fade">
        <IonToolbar>
          <IonTitle>Justa</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent>
        <div className="login-section ion-padding">
          <div className="heading ion-padding">
            <h1>Olá, seja bem-vindo(a) de volta!</h1>
            <p>Faça o seu login para continuar.</p>
          </div>
          <div className="login-form ion-padding">
            <div className="form-input">
              <IonItem>
                <IonLabel position="floating">E-mail</IonLabel>
                <IonInput type="email"></IonInput>
              </IonItem>
            </div>
            <div className="form-input">
              <IonIcon name = "lock-closed-outline"></IonIcon>
              <IonItem>
                <IonLabel position="floating">Senha</IonLabel>
                <IonInput type="password"></IonInput>
              </IonItem>
            </div>
          </div>
          <div className="action-button ion-padding">
            <IonButton size="default" class="login-button">Login</IonButton>
            <p>Esqueceu a sua senha?</p>
            <IonButton class="signup-button" size="default" fill="outline" routerLink="\signup">Sign up</IonButton>
          </div>
        </div>
      </IonContent>

    </IonPage>
  );
};

export default Home;
