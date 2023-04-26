import { IonContent, IonHeader, IonPage, IonButton, IonIcon, } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import './ForgotPassword.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { arrowBackOutline } from 'ionicons/icons';

const Empty: React.FC = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  return (
    <IonPage>
      <IonHeader>
        <section className="register-header">
          <IonButton fill='clear' onClick={()=>navigate('/signin', {state:{id:state.id, loyalty:state.loyalty}})}>
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </IonButton>
          <div className="register-title">
            <img src = "/logo2.png"></img>
          </div>
        </section>
      </IonHeader>
      <IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Empty;