import { IonButtons,IonItem, IonList, IonLabel, IonAvatar, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon, IonSearchbar, IonMenuToggle } from "@ionic/react";
import { arrowForwardOutline, notificationsOutline, settingsOutline, logOutOutline, receiptOutline, calendarOutline, barcodeOutline, sendOutline, cardOutline, calculatorOutline, trophyOutline, pricetagsOutline, hourglassOutline, statsChartOutline, shuffleOutline} from "ionicons/icons";
import './Login.css'
import { Balance } from "../components/balance";

const Signin = () =>{
  let balance = 1;

    return(
      <>
        <IonMenu contentId="main-content">
          <section className="header-section" >
            <IonHeader>
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
              </IonToolbar>
            </IonHeader>
          </section>
          <section className="avatar-header">
            <IonItem lines="none">
              <IonAvatar slot="start">
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              </IonAvatar>
              <IonLabel>
                Nome Sobrenome
                <p>Nível 3</p>
              </IonLabel>
              <div className="icon-hero"><img src = "/superhero.png"></img></div>
            </IonItem>
          </section>
          <IonSearchbar className="search-menu" showCancelButton="focus" placeholder="Pesquisar"></IonSearchbar>
          
          <IonContent>
            <IonList className="options-menu">
            <IonMenuToggle auto-hide="false">
                <IonItem lines="none">
                  <IonIcon icon={trophyOutline}></IonIcon>
                  <IonLabel>Meus benefícios</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle auto-hide="false">
                <IonItem lines="none">
                  <IonIcon icon={calendarOutline}></IonIcon>
                  <IonLabel>Agenda de Recebíveis</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="none">
                <IonIcon icon={barcodeOutline}></IonIcon>
                  <IonLabel>Pagar Boleto</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="none">
                <IonIcon icon={sendOutline}></IonIcon>
                  <IonLabel>Linkou</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="none">
                <IonIcon icon={cardOutline}></IonIcon>
                  <IonLabel>Crédito Justo</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="none">
                <IonIcon icon={calculatorOutline}></IonIcon>
                  <IonLabel>Simulador de Vendas</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="none">
                <IonIcon icon={statsChartOutline}></IonIcon>
                  <IonLabel>Estatística de Desempenho</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="none">
                <IonIcon icon={hourglassOutline}></IonIcon>
                  <IonLabel>Vendas em Tempo Real</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem lines="none">
                <IonIcon icon={shuffleOutline}></IonIcon>
                  <IonLabel>Transferência de Vendas</IonLabel>
                </IonItem>
              </IonMenuToggle>

            </IonList>
          </IonContent>
          </IonMenu>

        <IonPage id="main-content">
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
          <IonContent>
            <main>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Nível de lealdade: 3</IonCardSubtitle>
                  <IonCardTitle>SUPER-HERÓI</IonCardTitle>
                  <IonButton fill="clear">
                    Acesse os benefícios
                    <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
                  </IonButton>
                </IonCardHeader>
              </IonCard>
              <Balance balance={balance}/>
              <section className="products-sec">
                <IonTitle >Produtos</IonTitle>
                <div className='products'>
                  <IonButton shape='round' size='large'>
                    <IonIcon slot='icon-only' ></IonIcon>
                  </IonButton>
                  <IonButton shape='round' size='large'>
                    <IonIcon slot='icon-only' ></IonIcon>
                  </IonButton>
                  <IonButton shape='round' size='large'>
                    <IonIcon slot='icon-only'></IonIcon>
                  </IonButton>
                  <IonButton shape='round' size='large'>
                    <IonIcon slot='icon-only' ></IonIcon>
                  </IonButton>
                  <IonButton shape='round' size='large'>
                    <IonIcon slot='icon-only'></IonIcon>
                  </IonButton>
                  <IonButton shape='round' size='large'>
                    <IonIcon slot='icon-only'></IonIcon>
                  </IonButton>
                </div>
              </section>
            </main>
          </IonContent>
        </IonPage>
      </>
    );
}

export default Signin