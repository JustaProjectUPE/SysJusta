import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonMenuButton, IonButtons, IonApp} from '@ionic/react';
import './Home.css';
import { lockClosedOutline, mailOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
<>
<IonMenu contentId="main-content">
  <IonHeader>
    <IonToolbar>
      <IonTitle>Menu Content</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent className="ion-padding">This is the menu content.</IonContent>
</IonMenu>
<IonPage id="main-content">
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton></IonMenuButton>
      </IonButtons>
      <div className="titleicon">
          <img src = "/logo2.png"></img>
        </div>
    </IonToolbar>
  </IonHeader>
  <IonContent id = "background-Home">
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
                <IonInput id="input-email" color="medium" shape="round" type="email"></IonInput>
              </IonItem>
            </div>
            <div className="form-input">
              <IonItem>
                <IonIcon className="iconsInput" icon={lockClosedOutline}></IonIcon>
                <IonLabel className = "labelInput" position="floating">Senha</IonLabel>
                <IonInput id="input-senha" color="medium" type="password"></IonInput>
              </IonItem>
            </div>
          </div>
          <div className="action-button ion-padding">
          <IonButton id="forgotmypass"size="small" fill = "clear"  routerLink="/forgotpass" > Esqueceu a sua senha? </IonButton>
          <IonContent></IonContent>
            <IonButton id="signin-button" size="default" class="login-button" routerLink="/signin">Entrar</IonButton>
            <p id="question" >Ainda não tem conta?</p>
            <IonButton id="signup-button" size="default" fill="outline" routerLink="/signup">Cadastre-se</IonButton>
            <IonContent></IonContent>
          </div>
        </div>
      </IonContent>
</IonPage>
</>
  );
};

export default Home;
