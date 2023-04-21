import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonToolbar } from '@ionic/react';
import './Register.css'
import {peopleOutline, pricetagOutline, pricetagsOutline } from 'ionicons/icons';

const Register: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
            <section className="register-header">
          <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <div className="register-title">
            <img src = "/logo2.png"></img>
          </div>
          </IonToolbar>
          </section>
        </IonHeader>
  
        <IonContent className="background-forgotpass">
          <div className="register-section ion-padding">
              <h1>Cadastros</h1>
              <p>Selecione a categoria que você deseja cadastrar.</p>
              <IonGrid>
                <IonRow>
                  <IonCol size-sm="6" size="6"  class="ion-text-center">
                      <IonButton id="product-button" fill="solid" expand="block" size="large" routerLink='/register-product'>
                        <IonIcon icon={pricetagsOutline}></IonIcon>
                      </IonButton>
                      <IonLabel>Produtos</IonLabel>
                  </IonCol>
                  <IonCol size-sm="6" size="6"  class="ion-text-center">
                  <IonButton  id = "people-button" fill="solid" expand="block" size="large" routerLink='/register-people'>
                    <IonIcon icon={peopleOutline}></IonIcon>
                  </IonButton>
                  <IonLabel>Funcionários</IonLabel>
                </IonCol>
                </IonRow>
                    </IonGrid>
                </div>
        </IonContent>
  
      </IonPage>
    );
  };
  
  export default Register;