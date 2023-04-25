import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonList, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonCardHeader, IonCardTitle, IonButtons, IonBackButton, IonSelectOption, IonSelect, IonCardSubtitle} from '@ionic/react';
import './Signup.css';
import './Credit.css';
import { mailOutline } from 'ionicons/icons';

const Credit: React.FC = () => {
  return (
<IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton defaultHref="/signin"></IonBackButton>
          </IonButtons>
          <div className="titleicon">
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
                    <IonCardSubtitle>Insira aqui o valor</IonCardSubtitle>
                    <IonCardSubtitle>
                        <img src="./elo.png"></img>
                    </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <h2>Histórico de transações</h2>
                    <IonList>
                        <IonItem>

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

export default Credit;