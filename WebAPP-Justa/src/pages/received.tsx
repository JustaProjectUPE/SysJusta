import { IonPage, IonHeader, IonFooter, IonText,IonList, IonToolbar, IonIcon, IonRow, IonCol, IonSelect, IonContent, IonButton, IonDatetime, IonGrid, IonItem, IonTitle, IonLabel, IonSegment, IonSegmentButton, IonCard, IonCardContent, IonCardHeader, IonDatetimeButton, IonModal, IonButtons, IonBackButton, IonSelectOption, IonCardSubtitle, IonCardTitle  } from '@ionic/react';
import { arrowBackOutline, calendarOutline } from 'ionicons/icons';
import './received.css'
import { useState} from 'react';
import { format, parseISO} from 'date-fns';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

let quantidade = 10, valorTotal=1;

var btnC:any = document.querySelector("#button-cartao");
var dadosCar:any = document.querySelector(".cartao");
var btnB:any = document.querySelector("#button-bol");
var dadosBol:any = document.querySelector(".boleto");
var btnT:any = document.querySelector("#button-trans");
var dadosTrans:any = document.querySelector(".transferencia");

interface TotalExtract {
  date: string;
  desc: string;
  value: number;
  type: number;
}

const Received: React.FC = () => {

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

/*Conexão com back*/
const [ExtractData, setExtractData] = useState<TotalExtract[]>([]);
const location = useLocation();
const {state} = useLocation();
const navigate = useNavigate();
console.log(location.state)

async function fetchData(client_tolken: number) {
  try{
    let res:any = await axios.get(`http://localhost:3000/extract/${client_tolken}`);
    const flatEmpData = res.data.flat();
    flatEmpData.shift()
    const newList = flatEmpData.map((extract:TotalExtract) => ({
      date: extract.date,
      desc: extract.desc,
      value: extract.value,
      type: extract.type
    }));

    setExtractData(newList);

  } catch (error) {
    console.log(error)
  }
}

/*seleção de datas*/
const [selectDateStart,setSelectdateStart] = useState("--/--/--");
const handleDateSelectionStart = (event:CustomEvent) => {
  setSelectdateStart(event.detail.value);
}
const[selectDateEnd,setSelectdateEnd] = useState("--/--/--");
const handleDateSelectionEnd = (event:CustomEvent) => {
  setSelectdateEnd(event.detail.value);
}
/*formatação das datas 
const formattedDataStart = format(parseISO(selectDateStart), "dd/MM/yyyy");
const formattedDataEnd = format(parseISO(selectDateEnd), "dd/MM/yyyy");
*/
return (
<>
<IonPage onLoad={()=>{fetchData(location.state.id)}}>
  <IonHeader>
    <IonToolbar>
      <IonButton slot="start" fill='clear' onClick={()=>navigate('/signin', {state:{id:state.id, loyalty:state.loyalty}})}>
        <IonIcon icon={arrowBackOutline}></IonIcon>
      </IonButton>
      <div className="title-icon">
      <img src = "/logo2.png"></img>
      </div>
    </IonToolbar>
  </IonHeader>
 
  <IonContent className="background-received">
    <IonGrid className='gridReceived'>
      <h1>Recebimentos</h1>
      <IonButton size='default' id="DataStart" expand="block" fill='clear'>
        Data inicial: {selectDateStart}
        <IonIcon slot="end" color="primary" icon={calendarOutline}></IonIcon>
      </IonButton>
      <IonModal id="selectdateStart" trigger="DataStart">
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
        <IonIcon slot='end' color="primary"  icon={calendarOutline}></IonIcon>
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
                <IonList>
                  {ExtractData.map((ext, index) => (
                      <IonItem key={index}>
                        <IonLabel>{ext.date} {ext.value}</IonLabel>
                        <IonLabel>{ext.type} {ext.desc}</IonLabel>
                      </IonItem>
                    ))}
                </IonList>
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
