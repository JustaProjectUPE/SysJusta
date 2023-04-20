import { IonPage, IonHeader, IonText, IonToolbar, IonIcon,  IonSelect, IonContent, IonButton, IonDatetime, IonItem, IonLabel, IonSegment, IonSegmentButton, IonCard, IonCardContent, IonCardHeader, IonDatetimeButton, IonModal  } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import './received.css'
import {format} from 'date-fns';

const Received: React.FC = () => {
return (
<>
<IonPage>
  <IonHeader>
      <IonToolbar>
      <div className='header'>
        <IonButton fill = "clear" size = "large">
          <IonIcon icon={arrowBackOutline}></IonIcon>
        </IonButton>
        <img src = "/logo2.png"></img>
      </div>
      </IonToolbar>
  </IonHeader>
 
  <IonContent className="background-received">
    <div className="title">
      <h1>Recebimentos</h1>
    </div>
   
      <IonItem className='data-item'>
        <div className='data'>
        <IonLabel>Start Date</IonLabel>
        <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
        <IonModal keepContentsMounted={true}>
          <IonDatetime id="datetime"></IonDatetime>
        </IonModal>
        </div>
      </IonItem>
 
      <IonSegment scrollable={true} className='forma'>
        <IonSegmentButton value="Cartão">
          <IonLabel className='LabelOpc'>Cartão</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="Boleto">
          <IonLabel className='LabelOpc'>Boleto</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="Antecipação">
          <IonLabel className='LabelOpc'>Antecipação</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="Pix">
          <IonLabel className='LabelOpc'>Pix</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="Transferencia">
          <IonLabel className='LabelOpc'>Transferencia</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    
    <IonCard className='info-card'>
      <IonCardHeader>
        <h3>Quantidade de transações</h3>
        <h4>Valor total recebido</h4>
      </IonCardHeader>
      <IonCardContent>
      <p>200</p>
      <p>200</p>
      </IonCardContent>
    </IonCard>
  
    <IonCard className='dados-card'>
      <IonCardHeader>
        <IonText>Extrato</IonText>
        <div className='origem'>
        <h5>Data</h5>
        <h5>Operadora</h5>
        <h5>Banco</h5>
        <h5>Valor bruto</h5>
        <h5>Valor liquido</h5>
        </div>
      </IonCardHeader>
      <IonCardContent>
        Here's a small text description for the card content. Nothing more, nothing less.
      </IonCardContent>
    </IonCard>
  
   
  
  </IonContent>
</IonPage>
</>
);
}
export default Received;
