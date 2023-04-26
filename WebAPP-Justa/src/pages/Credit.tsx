import { IonContent, IonHeader, IonPage, IonItem, IonButton, IonIcon, IonList, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonCardHeader, IonCardTitle, IonCardSubtitle} from '@ionic/react';
import './Signup.css';
import './Credit.css';
import { arrowBackOutline } from 'ionicons/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const Credit: React.FC = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  return (
<IonPage>
      <IonHeader>
        <section className="register-header">
          <IonButton fill='clear' onClick={()=>navigate('/signin', {state:{id:state.id, loyalty:state.loyalty}})}>
            <IonIcon icon={arrowBackOutline}></IonIcon>
          </IonButton>
          <div className="register-title">
            <img src = "/logo2.png"></img>
          </div>
        </section>
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