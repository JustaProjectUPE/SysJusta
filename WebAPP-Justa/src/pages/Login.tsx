import { IonButtons,IonItem, IonList, IonLabel, IonAvatar, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon, IonSearchbar, IonMenuToggle, IonNavLink, IonGrid, IonRow, IonCol, IonCardContent } from "@ionic/react";
import { arrowForwardOutline, notificationsOutline, settingsOutline, logOutOutline, calendarOutline, barcodeOutline, sendOutline, cardOutline, calculatorOutline, trophyOutline, hourglassOutline, statsChartOutline, shuffleOutline, addCircleOutline} from "ionicons/icons";
import './Login.css'
import { Balance } from "../components/Balance";
import { useState } from "react";
import axios from "axios";
import Register from "./Register";
import Received from "./received";
import { useLocation, useNavigate } from "react-router-dom";
import Mybenefits from "./Mybenefits";
import Linkou from "./Linkou";
import Credit from "./Credit";
import Simulator from "./Simulator";
import Boleto from "./boleto";
import Empty from "./empty";

interface ClientData {
  name: string;
  surname: string;
}

const Signin = () =>{
  const [clientData, setClientData] = useState<ClientData>({ name: "", surname: ""});
  const location = useLocation();
  const navigate = useNavigate();

  async function fetchData(client_tolken: number) {
    try{
      let res:any = await axios.get(`http://localhost:3000/menu/${client_tolken}`);
      setClientData(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  function checkLevel(level: number){
    if(level == 1){
      return 'HERÓI INICIANTE'
    } else if(level == 2){
      return 'HERÓI DE CARREIRA'
    } else if(level == 3) {
      return 'SUPER-HERÓI'
    }
    else if(level == 4){
      return 'HERÓI ÉPICO'
    }
    else if(level == 5){
      return 'HERÓI LENDÁRIO'
    }
  }
 
    return(
      <>
        <IonMenu contentId="main-content">
          <section className="header-section" >
            <IonHeader class="ion-no-border">
              <IonToolbar>
                <div className="buttons-header">
                  <IonButton id="settings" fill="clear">
                    <IonIcon icon={settingsOutline} slot="end"></IonIcon>
                  </IonButton>
                  <IonButton id="notify"  fill="clear">
                    <IonIcon icon={notificationsOutline} slot="end"></IonIcon>
                  </IonButton>
                  <IonButton id="logout" fill="clear" routerLink="/home">
                    <IonIcon icon={logOutOutline} slot="start"></IonIcon> Sair
                  </IonButton>
                </div>
                <IonAvatar className="icon-avatar">
                  <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel className="label-avatar">
                  <div id="nome-user">{`${clientData["name"]} ${clientData["surname"]}`}</div>
                    <p>Nível {location.state.loyalty}</p>
                    <div><img src="/icon-superhero.png"></img></div>
                </IonLabel>
              </IonToolbar>
            </IonHeader>
          </section>
          <IonContent className="body-menu">
            <IonList className="options-menu">
              <IonMenuToggle auto-hide="false">
                <IonNavLink routerDirection="forward" component={() => <Mybenefits />}>
                        <IonItem lines="full">
                            <IonButton fill="clear" class="menu-button" onClick={()=>navigate('/mybenefits', {replace: true, state:{id:location.state.id, loyalty: location.state.loyalty}})}>
                                <span>
                                <IonIcon icon={trophyOutline}></IonIcon>
                                <IonLabel>Meus Benefícios</IonLabel>
                                </span>
                            </IonButton>
                        </IonItem>
                    </IonNavLink>
                    </IonMenuToggle>
              <IonMenuToggle auto-hide="false">
                    <IonNavLink routerDirection="forward" component={() => <Received />}>
                        <IonItem lines="full">
                            <IonButton fill="clear" class="menu-button" onClick={()=>navigate('/received', {replace: true, state:{id:location.state.id, loyalty: location.state.loyalty}})}>
                                <span>
                                <IonIcon icon={calendarOutline}></IonIcon>
                                <IonLabel>Agenda de Recebíveis</IonLabel>
                                </span>
                            </IonButton>
                        </IonItem>
                    </IonNavLink>
                </IonMenuToggle>
                <IonMenuToggle>
              <IonNavLink routerDirection="forward" component={() => <Boleto />}>
                <IonItem lines="full">
                  <IonButton fill="clear" class="menu-button" onClick={()=>navigate('/boleto', {replace: true, state:{id: location.state.id, loyalty: location.state.loyalty}})}>
                    <span>
                      <IonIcon icon={barcodeOutline}></IonIcon>
                      <IonLabel>Pagar Boleto</IonLabel>
                    </span>
                  </IonButton>
                </IonItem>
                </IonNavLink>
              </IonMenuToggle>
              <IonMenuToggle>
              <IonNavLink routerDirection="forward" component={() => <Register />}>
                <IonItem lines="full">
                  <IonButton fill="clear" class="menu-button" onClick={()=>navigate('/register', {replace: true, state:{id: location.state.id, loyalty: location.state.loyalty}})}>
                    <span>
                      <IonIcon icon={addCircleOutline}></IonIcon>
                      <IonLabel>Cadastros</IonLabel>
                    </span>
                  </IonButton>
                </IonItem>
                </IonNavLink>
              </IonMenuToggle>
              <IonMenuToggle>
              <IonNavLink routerDirection="forward" component={() => <Linkou />}>
                <IonItem lines="full">
                  <IonButton fill="clear" class="menu-button" onClick={()=>navigate('/linkou', {replace: true, state:{id: location.state.id, loyalty: location.state.loyalty}})}>
                    <span>
                      <IonIcon icon={sendOutline}></IonIcon>
                      <IonLabel>Linkou</IonLabel>
                    </span>
                  </IonButton>
                </IonItem>
                </IonNavLink>
              </IonMenuToggle>
              <IonMenuToggle>
              <IonNavLink routerDirection="forward" component={() => <Credit />}>
                <IonItem lines="full">
                  <IonButton fill="clear" class="menu-button" onClick={()=>navigate('/credit', {replace: true, state:{id: location.state.id, loyalty: location.state.loyalty}})}>
                    <span>
                      <IonIcon icon={cardOutline}></IonIcon>
                      <IonLabel>Crédito Justo</IonLabel>
                    </span>
                  </IonButton>
                </IonItem>
                </IonNavLink>
              </IonMenuToggle>
              <IonMenuToggle>
              <IonNavLink routerDirection="forward" component={() => <Simulator />}>
                <IonItem lines="full">
                  <IonButton fill="clear" class="menu-button" onClick={()=>navigate('/simulator', {replace: true, state:{id: location.state.id, loyalty: location.state.loyalty}})}>
                    <span>
                      <IonIcon icon={calculatorOutline}></IonIcon>
                      <IonLabel>Simulador de Vendas</IonLabel>
                    </span>
                  </IonButton>
                </IonItem>
                </IonNavLink>
              </IonMenuToggle>
              <IonMenuToggle>
              <IonNavLink routerDirection="forward" component={() => <Empty/>}>
                <IonItem lines="full">
                  <IonButton fill="clear" class="menu-button" onClick={()=>navigate('/empty', {replace: true, state:{id: location.state.id, loyalty: location.state.loyalty}})}>
                    <span>
                      <IonIcon icon={statsChartOutline}></IonIcon>
                      <IonLabel>Gráficos de Desempenho</IonLabel>
                    </span>
                  </IonButton>
                </IonItem>
                </IonNavLink>
              </IonMenuToggle>
              <IonMenuToggle>
              <IonNavLink routerDirection="forward" component={() => <Empty/>}>
                <IonItem lines="full">
                  <IonButton fill="clear" class="menu-button" onClick={()=>navigate('/empty', {replace: true, state:{id: location.state.id, loyalty: location.state.loyalty}})}>
                    <span>
                      <IonIcon icon={hourglassOutline}></IonIcon>
                      <IonLabel>Vendas em Tempo Real</IonLabel>
                    </span>
                  </IonButton>
                </IonItem>
                </IonNavLink>
              </IonMenuToggle>
              <IonMenuToggle>
              <IonNavLink routerDirection="forward" component={() => <Empty/>}>
                <IonItem lines="full">
                  <IonButton fill="clear" class="menu-button" onClick={()=>navigate('/empty', {replace: true, state:{id: location.state.id, loyalty: location.state.loyalty}})}>
                    <span>
                      <IonIcon icon={shuffleOutline}></IonIcon>
                      <IonLabel>Transferência de Vendas</IonLabel>
                    </span>
                  </IonButton>
                </IonItem>
                </IonNavLink>
              </IonMenuToggle>
            </IonList>
          </IonContent>
          </IonMenu>

        <IonPage id="main-content" onLoad={()=>{fetchData(location.state.id)}}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton>
                </IonMenuButton>
              </IonButtons>
              <div className="titleicon">
                <img src = "/logo2.png"></img>
              </div>
            </IonToolbar>
          </IonHeader>
          <IonContent className="signin-back">
            <IonGrid className="signin-grid">
              <IonRow class="ion-justify-content-center">
              <h1>Seja bem-vindo, {clientData["name"]}!</h1>
                <IonCol size="11">
              <IonCard className="card-loyalty">
                <img src="./card1.jpg"></img>
                <IonCardHeader>
                  <IonCardSubtitle>Nível de lealdade: {location.state.loyalty}</IonCardSubtitle>
                  <IonCardTitle>{checkLevel(location.state.loyalty)}</IonCardTitle>
                  <IonButton className="button-loyalty" fill="clear" onClick={()=>navigate('/mybenefits', {replace: true, state:{id:location.state.id, loyalty: location.state.loyalty}})}>
                    <IonLabel>Acesse os benefícios</IonLabel>
                    <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
                  </IonButton>
                </IonCardHeader>
              </IonCard>
              </IonCol>
              </IonRow>
              <IonRow class="ion-justify-content-center">
                <IonCol size="12">
              <Balance balance={clientData["finance"]}/>
              <section className="products-sec">
                <IonTitle>
                  Serviços
                  </IonTitle>
                <div className='products'>
                  <div>
                    <IonButton className="product-button" shape='round' size='large' onClick={()=>navigate('/received', {replace: true, state:{id:location.state.id, loyalty: location.state.loyalty}})}>
                      <IonIcon slot='icon-only' icon={calendarOutline}></IonIcon>
                    </IonButton>
                    <p className="product-label">Agenda de recebíveis</p>
                  </div>
                  <div>
                    <IonButton className="product-button" shape='round' size='large' onClick={()=>navigate('/register', {replace: true, state:{id:location.state.id, loyalty:location.state.loyalty}})}>
                      <IonIcon slot='icon-only' icon={addCircleOutline}></IonIcon>
                    </IonButton>
                    <p className="product-label">Cadastros</p>
                  </div>
                  <div>
                    <IonButton className="product-button" shape='round' size='large'>
                      <IonIcon slot='icon-only' icon={calculatorOutline}></IonIcon>
                    </IonButton>
                    <p className="product-label">Simulador de vendas</p>
                  </div>
                  <div>
                    <IonButton className="product-button" shape='round' size='large'>
                      <IonIcon slot='icon-only' icon={statsChartOutline}></IonIcon>
                    </IonButton>
                    <p className="product-label">Desempenho do negócio</p>
                  </div>
                  <div>
                    <IonButton className="product-button" shape='round' size='large'>
                      <IonIcon slot='icon-only' icon={cardOutline}></IonIcon>
                    </IonButton>
                    <p className="product-label">Crédito justo</p>
                  </div>
                  <div>
                    <IonButton className="product-button" shape='round' size='large'>
                      <IonIcon slot='icon-only' icon={sendOutline}></IonIcon>
                    </IonButton>
                    <p className="product-label">Linkou</p>
                  </div>
                </div>
              </section>
              </IonCol>
              </IonRow>
              </IonGrid>
          </IonContent>
        </IonPage>
      </>
    );
}

export default Signin