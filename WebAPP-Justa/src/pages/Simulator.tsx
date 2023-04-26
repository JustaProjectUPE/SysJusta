import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonBackButton, IonButtons, IonButton, IonIcon } from '@ionic/react';
import './Simulator.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { arrowBackOutline } from 'ionicons/icons';

const Simulator: React.FC = () => {
  const [valorTotal, setValorTotal] = useState(0);
  const [valorRecebido, setValorRecebido] = useState(0);
  const [valorAPagar, setValorAPagar] = useState(0);
  const [parcelas, setParcelas] = useState(1);
  const [valorParcela, setValorParcela] = useState(0);

  const {state} = useLocation();
  const navigate = useNavigate();

  const calcularParcelas = (valorTotal: number, valorRecebido: number, valorAPagar: number, parcelas: number) => {
    const valorRestante = valorTotal - valorRecebido - valorAPagar;
    const valorParcela = valorRestante / parcelas;
    setValorParcela(valorParcela);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButton slot="start" fill='clear' onClick={()=>navigate('/signin', {state:{id:state.id, loyalty:state.loyalty}})}>
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </IonButton>
          <IonTitle className='page-title'>Simulador de Vendas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className='form'>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Valores</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem className='form-input'>
                    <IonLabel position="floating">Valor total</IonLabel>
                    <IonInput type="number" value={valorTotal} onIonChange={e => setValorTotal(parseFloat(e.detail.value!))}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Valor recebido</IonLabel>
                    <IonInput type="number" value={valorRecebido} onIonChange={e => setValorRecebido(parseFloat(e.detail.value!))}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Valor a pagar</IonLabel>
                    <IonInput type="number" value={valorAPagar} onIonChange={e => setValorAPagar(parseFloat(e.detail.value!))}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Parcelas</IonLabel>
                    <IonSelect value={parcelas} onIonChange={e => setParcelas(parseInt(e.detail.value!, 10))}>
                      <IonSelectOption value="1">1</IonSelectOption>
                      <IonSelectOption value="2">2</IonSelectOption>
                      <IonSelectOption value="3">3</IonSelectOption>
                      <IonSelectOption value="4">4</IonSelectOption>                   
                      <IonSelectOption value="5">5</IonSelectOption>
                      <IonSelectOption value="6">6</IonSelectOption>
                      <IonSelectOption value="7">7</IonSelectOption>
                      <IonSelectOption value="8">8</IonSelectOption>
                      <IonSelectOption value="9">9</IonSelectOption>
                      <IonSelectOption value="10">10</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Resultados</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonLabel>Valor da parcela</IonLabel>
                    <IonLabel>{valorParcela.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardContent className='form-button'>
                  <button onClick={() => calcularParcelas(valorTotal, valorRecebido, valorAPagar, parcelas)}>Calcular parcelas</button>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Simulator;
