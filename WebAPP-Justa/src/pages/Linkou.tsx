import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonHeader, IonToolbar, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonLabel, IonCardContent, IonCard, IonItem, IonIcon } from '@ionic/react';
import './Linkou.css'
import ReactInputMask from 'react-input-mask';
import { arrowBackOutline } from 'ionicons/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const GeneratePaymentLinkPage = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [paymentLink, setPaymentLink] = useState('');

  const {state} = useLocation();
  const navigate = useNavigate();

  const generatePaymentLink = () => {
    // Simula a geração do link de pagamento com base nos valores inseridos
    const paymentLink = `https://www.exemplo.com.br/checkout?amount=${amount}&description=${description}`;
    setPaymentLink(paymentLink);
  };

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

      <IonContent className='linkou-form'>
        <IonGrid className="linkou-section">
          <IonRow>
            <IonCol size="12">
              <h1>Gerar link de pagamento</h1>
              <IonCard>
                <IonCardContent>
                  <IonItem>
                <IonLabel position="floating">Valor</IonLabel>
                <IonInput color="medium" value={amount} min="0" clearInput={true} type="number" onIonChange={(e) => setAmount(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                <IonLabel position="floating">Descrição</IonLabel>
                <IonInput color="medium" value={amount} min="0" clearInput={true} type="number" onIonChange={(e) => setDescription(e.detail.value!)}></IonInput>
                </IonItem>
                </IonCardContent>
              </IonCard>
        <IonButton onClick={generatePaymentLink}>Gerar link de pagamento</IonButton>
        {paymentLink && (
          <div>
            <p>Aqui está o seu link de pagamento:</p>
            <a href={paymentLink}>{paymentLink}</a>
          </div>
        )}
        </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default GeneratePaymentLinkPage;
