import { IonContent, IonHeader, IonPage, IonItem, IonButton, IonIcon, IonList, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonCardHeader, IonCardTitle, IonCardSubtitle, IonToolbar, IonLabel} from '@ionic/react';
import './Signup.css';
import './Credit.css';
import { arrowBackOutline } from 'ionicons/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

interface TotalExtract {
  date: string;
  desc: string;
  value: number;
  type: number;
}

const Credit: React.FC = () => {
  const {state} = useLocation();
  const location = useLocation();
  const navigate = useNavigate();
  const [ExtractData, setExtractData] = useState<TotalExtract[]>([]);

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

  return (
<IonPage onLoad={()=>{fetchData(location.state.id)}}>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" fill='clear' onClick={()=>navigate('/signin', {state:{id:state.id, loyalty:state.loyalty}})}>
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </IonButton>
          <div className="register-title">
            <img src = "/logo2.png"></img>
          </div>
          </IonToolbar>
      </IonHeader>
      <IonContent className="credit-content">
        <IonGrid className="credit-section">
          <IonRow>
            <IonCol size="12">
              <IonCard className="card-principal">
                <IonCardHeader>
                    <IonCardTitle>Saldo do cartão</IonCardTitle>
                    <IonCardSubtitle>R$ 750,00</IonCardSubtitle>
                    <IonCardSubtitle>
                        <img src="./elo.png"></img>
                    </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <h2>Histórico de transações</h2>
                    <div className='informacao'>
                      <IonLabel color="dark" > DATA</IonLabel>
                      <IonLabel color="dark" >VALOR LÍQUIDO </IonLabel>
                      <IonLabel color="dark" >DESCRIÇÃO </IonLabel>
                    </div>
                    <IonList>
                        {ExtractData.map((ext, index) => {
                          if(ext.type == 4){
                          return(
                            <IonItem key={index}>
                              <IonLabel>{ext.date}</IonLabel>
                              <IonLabel>R$ {ext.value}</IonLabel>
                              <IonLabel>{ext.desc}</IonLabel>
                            </IonItem>
                          )}
                        return null;
                        })}
                    </IonList>
                    </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Credit;