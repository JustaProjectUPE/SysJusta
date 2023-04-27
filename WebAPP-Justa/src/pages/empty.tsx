import { IonPage, IonHeader, IonFooter, IonText,IonList, IonToolbar, IonIcon, IonRow, IonCol, IonSelect, IonContent, IonButton, IonDatetime, IonGrid, IonItem, IonTitle, IonLabel, IonSegment, IonSegmentButton, IonCard, IonCardContent, IonCardHeader, IonDatetimeButton, IonModal, IonButtons, IonBackButton, IonSelectOption, IonCardSubtitle, IonCardTitle  } from '@ionic/react';
import { calendarOutline, arrowBackOutline } from 'ionicons/icons';
import './received.css'

import { useLocation, useNavigate } from 'react-router-dom';

const Empty: React.FC = () => {
  const {state} = useLocation();
  const navigate = useNavigate();

return (
<>
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
  <IonContent></IonContent>
</IonPage>
</>
);
}
export default Empty;