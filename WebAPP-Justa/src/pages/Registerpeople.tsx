import { IonContent, IonHeader, IonPage, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonButtons, IonBackButton} from '@ionic/react';
import './Registerproduct.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { arrowBackOutline } from 'ionicons/icons'
import { useLocation, useNavigate } from 'react-router-dom';

interface empType {
  name: string,
  sales: {
    jan: number,
    fev: number,
    mar: number,
    abr: number,
    mai: number,
    jun: number,
    jul: number,
    ago: number,
    set: number,
    out: number,
    nov: number,
    dez: number,
  };
}

const Registerpeople: React.FC = () => {
  const [empData, setEmpData] = useState<empType[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  

  async function fetchData(client_tolken: number) {
    try{
      let res:any = await axios.get(`http://localhost:3000/emp/${client_tolken}`);
      const flatEmpData = res.data.flat();
      flatEmpData.shift()
      const newList = flatEmpData.map((emp:empType) => ({
        name: emp.name,
        sales: emp.sales
      }));
      setEmpData(newList);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <IonPage onLoad={()=>{fetchData(location.state.id)}}>
      <IonHeader>
        <section className="register-header">
          <IonButton fill='clear' onClick={()=>navigate('/register', {state:{id:location.state.id, loyalty:location.state.loyalty}})}>
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </IonButton>
          <div className="titleicon">
            <img src = "/logo2.png"></img>
          </div>
        </section>
      </IonHeader>
      <IonContent className="register-product-content">
        <IonGrid className="register-product-section">
          <h1>Cadastro de Funcionários</h1>
          <p>Insira as informações abaixo.</p>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Formulário</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem className="input-product">
                    <IonLabel position="floating">Nome</IonLabel>
                    <IonInput color="medium" clearInput={true} type="text"></IonInput>
                  </IonItem>
                  <IonItem className="input-price">
                    <IonLabel position="floating">CPF</IonLabel>
                    <IonInput color="medium"  clearInput={true}></IonInput>
                  </IonItem>
                  <IonButton type="submit" size="default">Adicionar</IonButton>
                  <IonButton size="default">Atualizar</IonButton>
                  <IonButton size="default">Limpar</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
          <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Funcionários cadastrados</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    {empData.map((emp, index) => (
                      <IonItem key={index}>
                        <IonLabel>Nome: {emp.name}</IonLabel>
                        <IonLabel>Vendas: {emp.sales.jan}</IonLabel>
                      </IonItem>
                    ))}
                    <IonItem>
                    <IonLabel></IonLabel>
                    </IonItem>
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

export default Registerpeople;