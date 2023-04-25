import { IonPage, IonHeader, IonFooter, IonText, IonToolbar, IonIcon, IonRow, IonCol, IonSelect, IonContent, IonButton, IonDatetime, IonGrid, IonItem, IonTitle, IonLabel, IonSegment, IonSegmentButton, IonCard, IonCardContent, IonCardHeader, IonDatetimeButton, IonModal, IonButtons, IonBackButton, IonSelectOption, IonCardSubtitle, IonCardTitle  } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';
import './received.css'
import { useState} from 'react';
import { format, parseISO} from 'date-fns';

let quantidade = 10, valorTotal=1;

var btnC:any = document.querySelector("#button-cartao");
var dadosCar:any = document.querySelector(".cartao");
var btnB:any = document.querySelector("#button-bol");
var dadosBol:any = document.querySelector(".boleto");
var btnT:any = document.querySelector("#button-trans");
var dadosTrans:any = document.querySelector(".transferencia");

/*funções para mostrar card dependendo a seleção do usuario*/
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
  

const[selectDateStart,setSelectdateStart] = useState("");
const handleDateSelectionStart = (event:CustomEvent) => {
  setSelectdateStart(event.detail.value);
}
const[selectDateEnd,setSelectdateEnd] = useState("");
const handleDateSelectionEnd = (event:CustomEvent) => {
  setSelectdateEnd(event.detail.value);
}


return (
<>
<IonPage onLoad={()=>{fetchdata(location.state.id)}}>
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
          <IonBackButton></IonBackButton>
      </IonButtons>
      <div className="title-icon">
      <img src = "/logo2.png"></img>
      </div>
    </IonToolbar>
  </IonHeader>
 
  <IonContent className="background-received">
    <IonGrid className='gridReceived'>
      <h1>Recebimentos</h1>
      <IonButton size='default' id="Data" expand="block" fill='clear'>
        Data inicial: {selectDateStart}
        <IonIcon icon={calendarOutline}></IonIcon>
      </IonButton>
      <IonModal id="selectdate" trigger="Data">
        <IonContent>
          <IonDatetime
            onIonChange={handleDateSelectionStart}
            value={selectDateStart}
            presentation="date"
            doneText="OK"
            cancelText="Cancelar"
            showDefaultButtons={true}
            showDefaultTitle={true}
          ></IonDatetime>;
        </IonContent>
      </IonModal>

      <IonButton size='default' id="DataEnd" expand="block" fill='clear'>
        Data final: {selectDateEnd}
        <IonIcon icon={calendarOutline}></IonIcon>
      </IonButton>
      <IonModal id="selectdateEnd" trigger="DataEnd">
        <IonContent>
          <IonDatetime
            onIonChange={handleDateSelectionEnd}
            value={selectDateEnd}
            presentation="date"
            doneText="OK"
            cancelText="Cancelar"
            showDefaultButtons={true}
            showDefaultTitle={true}
          ></IonDatetime>;
        </IonContent>
      </IonModal>
      
    <IonSegment scrollable={true} >
      <IonSegmentButton  id="button-cartao" value="Cartão" onClick={() => showCar()}>
        <IonLabel >Cartão</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton id="button-bol" value="Boleto" onClick={() => showBol()}>
        <IonLabel>Boleto</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton id="button-trans" value="Transferencia" onClick={() => showTransf()}>
        <IonLabel>Transferencia</IonLabel>
      </IonSegmentButton>
    </IonSegment>
    
    <IonRow>
      <IonCol size="12">
        <IonCard>
          <IonCardContent>
            <div className='informacaoGeral'>
              <div className='quantidadeTotal'>
                <p>Quantidade de transações</p>
                <IonTitle color='dark'>{quantidade}</IonTitle>
              </div>
              <div className='valorTotal'>
                <p>Valor total recebido</p>
              <IonTitle color='dark'>R${valorTotal.toFixed(2)}</IonTitle>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>

    <IonRow>
      <IonCol size="12">
        
          <IonCard>
            <IonCardHeader>
              <IonCardTitle color="medium" >Extrato</IonCardTitle>
                <div className='informacao'>
                  <IonCardSubtitle color="dark" >DESCRIÇÃO </IonCardSubtitle>
                  <IonCardSubtitle color="dark" >VALOR LÍQUIDO </IonCardSubtitle>
                </div>
            </IonCardHeader>
            <div className='cartao'>
              <IonCardContent>
              <IonText>cartao</IonText>
              </IonCardContent>
            </div>

            <div className='boleto'>
              <IonCardContent>
              <IonText>boleto</IonText>
              </IonCardContent>
            </div>

            <div className='transferencia'>
              <IonCardContent>
                <IonText>transferencia</IonText>
              </IonCardContent>
            </div>



        </IonCard>
        </IonCol>
    </IonRow>

    
  
   
    </IonGrid>
  </IonContent>
</IonPage>
</>
);
}
export default Received;
