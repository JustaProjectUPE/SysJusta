import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import React from 'react'
import '../components/Balance.css'

export const Balance = ({balance}:any) => {

    let saldo = 1;
    let futuros = 1;

  return (
    <>
    <section className="balance-sec">
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>SALDO ATUAL</IonCardTitle>
                <IonCardTitle class="balance-future">Recebiveis</IonCardTitle>
                <IonCardSubtitle>{Number(balance).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</IonCardSubtitle>
                <IonCardSubtitle class="balance-future">R${futuros.toFixed(2)}</IonCardSubtitle>
            </IonCardHeader>
        </IonCard>
    </section>
    </>
  )
}
