import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonMenuButton, IonButtons, IonApp} from '@ionic/react';
import './Home.css';
import { lockClosedOutline, mailOutline } from 'ionicons/icons';
import { useState } from 'react';
import axios from 'axios'

const Home: React.FC = () => {
  
  const [clients, setClients] = useState(0);

  var login:any = document.querySelector('#login')
  var password:any = document.querySelector('#pass')

  async function fetchData() {
    try{
      let res = await axios.get(`http://localhost:3000/teste/${login.value}/${password.value}`);
      setClients(res.data)
    } catch(err) {
      console.log(err)
    }
  }

  function check(){
    console.log(login.value)
    fetchData()
    if(clients == 200){
      window.location.href = "/signin"
    }
  }

  return (
 <IonPage>
 <IonHeader>
        <IonToolbar>
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
            <section className="form-input">
              <IonItem>
                <IonIcon className="iconsInput" icon={mailOutline}></IonIcon>
                <IonLabel className = "labelInput" position="floating">E-mail</IonLabel>
                <IonInput id="input-email" color="medium" shape="round" type="email"></IonInput>
              </IonItem>
            </section>
            <section className="form-input">
              <IonItem>
                <IonIcon className="iconsInput" icon={lockClosedOutline}></IonIcon>
                <IonLabel className = "labelInput" position="floating">Senha</IonLabel>
                <IonInput id="input-senha" color="medium" type="password"></IonInput>
              </IonItem>
            </section>
          </div>
          <div className="action-button ion-padding">
          <div id="forgotmypass">
            <IonButton size="small" fill = "clear"  routerLink="/forgotpass" > Esqueceu a sua senha? </IonButton>
          </div>
          <IonContent></IonContent>
            <IonButton id="signin-button" size="default" class="login-button" routerLink="/signin" onClick={()=>{check()}}>Entrar</IonButton>
            <p id="question" >Ainda não tem conta?</p>
            <IonButton id="signup-button" size="default" fill="outline" routerLink="/signup">Cadastre-se</IonButton>
          </div>
        </div>
      </IonContent>
</IonPage>
  );
};

export default Home;
