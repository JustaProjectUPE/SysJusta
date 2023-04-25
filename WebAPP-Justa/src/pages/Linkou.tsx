import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton } from '@ionic/react';
import './Linkou.css'

const GeneratePaymentLinkPage = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [paymentLink, setPaymentLink] = useState('');

  const generatePaymentLink = () => {
    // Simula a geração do link de pagamento com base nos valores inseridos
    const paymentLink = `https://www.exemplo.com.br/checkout?amount=${amount}&description=${description}`;
    setPaymentLink(paymentLink);
  };

  return (
    <IonPage>
      <IonContent className='form'>
        <h1>Gerar link de pagamento</h1>
        <IonInput
          placeholder="Valor"
          type="number"
          value={amount}
          onIonChange={(e) => setAmount(e.detail.value!)}
        />
        <IonInput
          placeholder="Descrição"
          type="text"
          value={description}
          onIonChange={(e) => setDescription(e.detail.value!)}
        />
        <IonButton onClick={generatePaymentLink}>Gerar link de pagamento</IonButton>
        {paymentLink && (
          <div>
            <p>Aqui está o seu link de pagamento:</p>
            <a href={paymentLink}>{paymentLink}</a>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default GeneratePaymentLinkPage;
