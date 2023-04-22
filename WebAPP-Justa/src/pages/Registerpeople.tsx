import { IonContent, IonHeader, IonPage, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonButtons, IonBackButton} from '@ionic/react';
import './Registerproduct.css';

const Registerpeople: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <div className="titleicon">
            <img src = "/logo2.png"></img>
          </div>
        </IonToolbar>
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
                    <IonLabel position="floating">Nome Completo</IonLabel>
                    <IonInput color="medium" clearInput={true} type="text"></IonInput>
                  </IonItem>
                  <IonItem className="input-price">
                    <IonLabel position="floating">Quantidade de vendas</IonLabel>
                    <IonInput min="0" color="medium" clearInput={true} type="number"></IonInput>
                  </IonItem>
                  <IonButton size="default">Adicionar</IonButton>
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
                    <IonItem>
                    <IonLabel></IonLabel>
                    </IonItem>
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