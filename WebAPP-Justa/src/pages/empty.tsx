import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg} from '@ionic/react';
import './ForgotPassword.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { arrowBackOutline } from 'ionicons/icons';

const Empty: React.FC = () => {
  const {state} = useLocation();
  const navigate = useNavigate();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButton slot="start" fill='clear' onClick={()=>navigate('/signin', {state:{id:state.id, loyalty:state.loyalty}})}>
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </IonButton>
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