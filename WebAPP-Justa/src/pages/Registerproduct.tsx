import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonGrid, IonRow, IonCol} from '@ionic/react';
import './Registerproduct.css';
import { mailOutline } from 'ionicons/icons';

const Registerproduct: React.FC = () => {
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
            <h1>Cadastro Geral de Produtos </h1>
            <p>Insira as informações abaixo.</p>
            <IonItem className="input-code">
                <IonInput min="0" label = "Código" labelPlacement="fixed" id="input-code" color="medium" type="number"></IonInput>
              </IonItem>
            <IonItem className="input-product">
                <IonLabel position="floating">Produto</IonLabel>
                <IonInput color="medium" clearInput={true} type="text"></IonInput>
              </IonItem>
              <IonItem className="input-price"> 
                <IonLabel position="floating">Preço</IonLabel>
                <IonInput placeholder="R$" min="0" color="medium" clearInput={true} type="number"></IonInput>
              </IonItem>
              <IonItem className="input-estoque">
                <IonLabel position="floating">Estoque</IonLabel>
                <IonInput  color="medium" min="0" type="number" clearInput={true} ></IonInput>
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

export default Registerproduct;