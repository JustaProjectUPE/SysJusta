import { IonPage, IonHeader, IonFooter, IonText,IonList, IonToolbar, IonIcon, IonRow, IonCol, IonSelect, IonContent, IonButton, IonDatetime, IonGrid, IonItem, IonTitle, IonLabel, IonSegment, IonSegmentButton, IonCard, IonCardContent, IonCardHeader, IonDatetimeButton, IonModal, IonButtons, IonBackButton, IonSelectOption, IonCardSubtitle, IonCardTitle  } from '@ionic/react';
import { calendarOutline, arrowBackOutline } from 'ionicons/icons';
import './received.css'
import { useState} from 'react';
import { format, parseISO} from 'date-fns';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

let quantidade = 10, valorTotal=1;

interface TotalExtract {
  date: string;
  desc: string;
  value: number;
  type: number;
}

const Received: React.FC = () => {
var btnC:any = document.querySelector("#button-cartao");
var dadosCar:any = document.querySelector(".cartao");
var btnB:any = document.querySelector("#button-bol");
var dadosBol:any = document.querySelector(".boleto");
var btnT:any = document.querySelector("#button-trans");
var dadosTrans:any = document.querySelector(".transferencia");

let somaCard = 0, qtdCard = 0;
let somaBol = 0, qtdBol = 0;
let somaTransf = 0, qtdTransf = 0;

/Conexão com back/
const [ExtractData, setExtractData] = useState<TotalExtract[]>([]);
const [infoType, setInfoType] = useState('Cartão');
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

function handleSegmentChange(event) {
  setInfoType(event.detail.value);
}

/funções para mostrar card dependendo a seleção do usuario/
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

/seleção de datas/
const [selectDateStart,setSelectdateStart] = useState("2022-01-01T00:06:00");
const handleDateSelectionStart = (event:CustomEvent) => {
  setSelectdateStart(event.detail.value);
}
const[selectDateEnd,setSelectdateEnd] = useState("2022-09-01T00:06:00");
const handleDateSelectionEnd = (event:CustomEvent) => {
  setSelectdateEnd(event.detail.value);
}

/*formatação das datas */
const formattedDataStart = format(parseISO(selectDateStart), "dd/MM/yyyy");
const formattedDataEnd = format(parseISO(selectDateEnd), "dd/MM/yyyy");


return (
<>
<IonPage onLoad={()=>{fetchData(location.state.id)}}>
  <IonHeader>
    <IonToolbar>
      <IonButton fill='clear' slot = "start" onClick={()=>navigate('/signin', {state:{id:location.state.id, loyalty:location.state.loyalty}})}>
        <IonIcon icon={arrowBackOutline}></IonIcon>
      </IonButton>
      <div className="titleicon">
        <img src = "/logo2.png"></img>
      </div>
      </IonToolbar>
  </IonHeader>
  <IonContent className="background-received">
    <IonGrid className='gridReceived'>
      <h1>Recebimentos</h1>
      <IonButton size='default' id="DataStart" expand="block" fill='clear'>
        Data inicial: {formattedDataStart}
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
        Data final: {formattedDataEnd}
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
      
    <IonSegment scrollable={true} onIonChange={handleSegmentChange} >
      <IonSegmentButton  id="button-cartao" value="Cartão" onClick={() => showCar()}>
        <IonLabel >Cartão</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton id="button-bol" value="Boleto" onClick={() => showBol()}>
        <IonLabel>Boleto</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton id="button-trans" value="Transferencia" onClick={() => showTransf()}>
        <IonLabel>Transferência</IonLabel>
      </IonSegmentButton>
    </IonSegment>

    <IonRow>
      <IonCol size="12">
        <IonCard>
          <IonCardContent>
          {infoType === 'Cartão' && (
            <>
            {ExtractData.map((ext, index) => {
              if(ext.type == 1){
                somaCard += ext.value;
                qtdCard += 1;
                return(null);
              }
              return null;
            })}

            <div className='informacaoGeral'>
              <div className='quantidadeTotal'>
                <p>Quantidade de transações</p>
                <IonTitle color='dark'>{qtdCard}</IonTitle>
              </div>
              <div className='valorTotal'>
                <p>Valor total recebido</p>
              <IonTitle color='dark'>R$ {somaCard}</IonTitle>
              </div>
            </div>
            </>
      )}

      {infoType === 'Boleto' && (
        <>
        {ExtractData.map((ext, index) => {
          if(ext.type == 2){
            somaBol += ext.value;
            qtdBol += 1;
            return(null);
          }
          return null;
        })}

        <div className='informacaoGeral'>
          <div className='quantidadeTotal'>
            <p>Quantidade de transações</p>
            <IonTitle color='dark'>{qtdBol}</IonTitle>
          </div>
          <div className='valorTotal'>
            <p>Valor total recebido</p>
          <IonTitle color='dark'>R$ {somaBol}</IonTitle>
          </div>
        </div>
        </>
      )}

      {infoType === 'Transferencia' && (
        <>
        {ExtractData.map((ext, index) => {
          if(ext.type == 3){
            somaTransf += ext.value;
            qtdTransf += 1;
            return(null);
          }
          return null;
        })}

        <div className='informacaoGeral'>
          <div className='quantidadeTotal'>
            <p>Quantidade de transações</p>
            <IonTitle color='dark'>{qtdTransf}</IonTitle>
          </div>
          <div className='valorTotal'>
            <p>Valor total recebido</p>
          <IonTitle color='dark'>R$ {somaTransf}</IonTitle>
          </div>
        </div>
        </>
      )}
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
                <IonCardSubtitle color="dark" > DATA</IonCardSubtitle>
                <IonCardSubtitle color="dark" >VALOR LÍQUIDO </IonCardSubtitle>
                  <IonCardSubtitle color="dark" >DESCRIÇÃO </IonCardSubtitle>
                </div>
            </IonCardHeader>

            <div className='cartao'>
            <IonCardContent>
                <IonList>
                  {ExtractData.map((ext, index) => {
                    if(ext.type == 1){
                      return(
                      <IonItem key={index}>
                        <IonLabel>{ext.date}</IonLabel>
                        <IonLabel>R$ {ext.value}</IonLabel>
                        <IonLabel>{ext.desc}</IonLabel>
                      </IonItem>
                  )
                }
                return null;
                })}
                </IonList>
              </IonCardContent>
            </div>

            <div className='boleto'>
            <IonCardContent>
                <IonList>
                  {ExtractData.map((ext, index) => {
                    if(ext.type == 2){
                      return(
                      <IonItem key={index}>
                        <IonLabel>{ext.date}</IonLabel>
                        <IonLabel>R$ {ext.value}</IonLabel>
                        <IonLabel>{ext.desc}</IonLabel>
                      </IonItem>
                  )
                }
                return null;
                })}
                </IonList>
              </IonCardContent>
            </div>
            <div className='transferencia'>
            <IonCardContent>
                <IonList>
                  {ExtractData.map((ext, index) => {
                    if(ext.type == 3){
                      return(
                      <IonItem key={index}>
                        <IonLabel>{ext.date}</IonLabel>
                        <IonLabel>R$ {ext.value}</IonLabel>
                        <IonLabel>{ext.desc}</IonLabel>
                      </IonItem>
                  )
                }
                return null;
                })}
                </IonList>
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