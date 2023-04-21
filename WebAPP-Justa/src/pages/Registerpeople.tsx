import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonGrid, IonRow, IonCol} from '@ionic/react';
import './Registerproduct.css';
import { mailOutline } from 'ionicons/icons';

const Registerpeople: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <div className="titleicon">
          <img src = "/logo2.png"></img>
        </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="background-registerproduct">
        <div className="register-product-section ion-padding">
            <h1>Cadastro de Funcionários</h1>
            <p>Insira as informações abaixo.</p>
            <IonItem className="input-product">
                <IonLabel position="floating">Nome Completo</IonLabel>
                <IonInput color="medium" clearInput={true} type="text"></IonInput>
              </IonItem>
              <IonItem className="input-product">
                <IonLabel position="floating">Cargo</IonLabel>
                <IonInput color="medium" clearInput={true} type="text"></IonInput>
              </IonItem>
              <IonGrid>
                <IonRow>
                    <IonCol size-sm="4" size="4"  class="ion-text-center">
                        <IonButton>Adicionar</IonButton>
                    </IonCol>
                    <IonCol size-sm="4" size="4"  class="ion-text-center">
                        <IonButton>Atualizar</IonButton>
                    </IonCol>
                    <IonCol size-sm="4" size="4"  class="ion-text-center">
                        <IonButton>Limpar</IonButton>
                    </IonCol>
                </IonRow>
                    </IonGrid>
          </div>
      </IonContent>

    </IonPage>
  );
};

export default Registerpeople;