import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonNavLink, IonPage, IonRow, IonSelect, IonSelectOption, IonToolbar } from '@ionic/react';
import './Register.css'
import {peopleOutline, pricetagOutline, pricetagsOutline } from 'ionicons/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
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
                  <IonNavLink routerDirection="forward" component={() => <Register />}>
                      <IonButton id="product-button" fill="solid" expand="block" size="large" routerLink='/registerproduct'>
                        <IonIcon icon={pricetagsOutline}></IonIcon>
                      </IonButton>
                  </IonNavLink>
                      <IonLabel>Produtos</IonLabel>
                  </IonCol>
                  <IonCol size-sm="6" size="6"  class="ion-text-center">
                  <IonButton  id = "people-button" fill="solid" expand="block" size="large" routerLink='/registerpeople' onClick={()=>navigate('/registerpeople', {replace: true, state:{id:location.state.id}})}>
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