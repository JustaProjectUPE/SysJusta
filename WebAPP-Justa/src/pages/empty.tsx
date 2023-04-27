import { IonContent, IonHeader, IonPage, IonButton, IonIcon, IonToolbar, } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const Empty: React.FC = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton fill='clear' slot="start" onClick={()=>navigate('/signin', {state:{id:state.id, loyalty:state.loyalty}})}>
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </IonButton>
          <div className="register-title">
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