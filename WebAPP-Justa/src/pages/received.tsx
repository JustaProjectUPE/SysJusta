import { IonPage, IonHeader, IonText, IonToolbar, IonIcon,  IonSelect, IonContent, IonButton, IonDatetime, IonItem, IonTitle, IonLabel, IonSegment, IonSegmentButton, IonCard, IonCardContent, IonCardHeader, IonDatetimeButton, IonModal, IonButtons, IonBackButton, IonSelectOption, IonCardSubtitle, IonCardTitle  } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import './received.css'
import {format} from 'date-fns';

let quantidade = 10, valorTotal=1;

var btnC:any = document.querySelector("#button-cartao");
var dadosCar:any = document.querySelector(".cartao");
var btnB:any = document.querySelector("#button-bol");
var dadosBol:any = document.querySelector(".boleto");
var btnT:any = document.querySelector("#button-trans");
var dadosTrans:any = document.querySelector(".transferencia");

function showCar () {
  btnC.addEventListener("click", function(){
    dadosCar.style.display = "block";
    dadosBol.style.display="none";
    dadosTrans.style.display = "none";
  });
}
function showBol () {
  btnB.addEventListener("click", function(){
    dadosBol.style.display = "block";
    dadosCar.style.display="none";
    dadosTrans.style.display = "none";
  });
}
function showTransf () {
  btnT.addEventListener("click", function(){
    dadosTrans.style.display = "block";
    dadosCar.style.display="none";
    dadosBol.style.display="none";
  });
}


const Received: React.FC = () => {
return (
<>
<IonPage>
  <IonHeader>
    <div className='header'>
      <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton></IonBackButton>
        </IonButtons>
        <div className="title-icon">
        <img src = "/logo2.png"></img>
        </div>
      </IonToolbar>
      </div>
  </IonHeader>
 
  <IonContent className="background-received">
  <IonItem className='selecionar-informacao'>
      <IonSelect className="title" interface="popover" placeholder="Recebimentos">
        <IonSelectOption value="Recebimentos">Recebimentos</IonSelectOption>
        <IonSelectOption value="Despesas">Despesas</IonSelectOption>
      </IonSelect>
     </IonItem>
      
      <IonItem className='data-item'>
        <IonLabel color="light">xxxxxx</IonLabel>
      </IonItem>
      
      
      <IonSegment scrollable={true} className='opcao'>
        <IonSegmentButton  id="button-cartao" value="Cartão" onClick={() => showCar()}>
          <IonLabel className='LabelOpc'>Cartão</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton id="button-bol" value="Boleto" onClick={() => showBol()}>
          <IonLabel className='LabelOpc'>Boleto</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton id="button-trans" value="Transferencia" onClick={() => showTransf()}>
          <IonLabel className='LabelOpc'>Transferencia</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="Antecipação">
          <IonLabel className='LabelOpc'>Antecipação</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    
      <IonCard className='info-geral'>
      <IonCardContent>
        <div className='Total'>
          <div className='quantT'>
            <h3>Quantidade de transações</h3>
            <IonTitle color="light">{quantidade}</IonTitle>
          </div>
          <div className='ValorT'>
            <h3>Valor total recebido</h3>
            <IonTitle color="light" >R${valorTotal.toFixed(2)}</IonTitle>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  
    <div className='cartao'>
    <IonCard className='dados-cartao'>
      <IonCardHeader>
        <IonCardTitle color="light" >Extrato</IonCardTitle>
        <div className='info-cartao'>
        <IonCardSubtitle  color="light" >DATA </IonCardSubtitle>
        <IonCardSubtitle color="light" >DESCRIÇÃO </IonCardSubtitle>
        <IonCardSubtitle color="light" >VALOR LÍQUIDO </IonCardSubtitle>
        </div>
      </IonCardHeader>
      <IonCardContent>
        <div className='exemplo'>
          <p>30/04/2023</p>
          <p>xxxxxxx</p>
          <p>1800</p>
        </div>
        <div className='exemplo2'>
          <p>30/04/2023</p>
          <p>xxxxxxx</p>
          <p>1800</p>
        </div>
      </IonCardContent>
    </IonCard>
    </div>

    <div className='boleto'>
    <IonCard className='dados-boleto'>
      <IonCardHeader>
      <IonCardTitle color="light" >Extrato</IonCardTitle>
        <div className='info-boleto'>
        <IonCardSubtitle  color="light" >DATA </IonCardSubtitle>
        <IonCardSubtitle color="light" >DESCRIÇÃO </IonCardSubtitle>
        <IonCardSubtitle color="light" >VALOR </IonCardSubtitle>
        </div>
      </IonCardHeader>
      <IonCardContent>
        Here's a small text description for the card content. Nothing more, nothing less.
      </IonCardContent>
    </IonCard>
    </div>

    <div className='transferencia'>
    <IonCard className='dados-transferencia'>
      <IonCardHeader>
      <IonCardTitle color="light" >Extrato</IonCardTitle>
        <div className='info-transferencia'>
        <IonCardSubtitle  color="light" >DATA </IonCardSubtitle>
        <IonCardSubtitle color="light" >DESCRIÇÃO </IonCardSubtitle>
        <IonCardSubtitle color="light" >VALOR </IonCardSubtitle>
        </div>
      </IonCardHeader>
      <IonCardContent>
        Here's a small text description for the card content. Nothing more, nothing less.
      </IonCardContent>
    </IonCard>
    </div>
  
   
  
  </IonContent>
</IonPage>
</>
);
}
export default Received;
