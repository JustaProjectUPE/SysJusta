import { IonContent, IonHeader, IonPage, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonButtons, IonBackButton} from '@ionic/react';
import './Registerproduct.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

const Registerpeople: React.FC = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, cpf };
    try {
      const response = await axios.post('http://localhost:3000', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
              <IonCard onSubmit={(e) => handleSubmit(e)}>
                <IonCardHeader>
                  <IonCardTitle>Formulário</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem className="input-product">
                    <IonLabel position="floating">Nome</IonLabel>
                    <IonInput color="medium" value={name} clearInput={true} type="text" onChange={(e) => setName(e.target.value)}></IonInput>
                  </IonItem>
                  <IonItem className="input-price">
                    <IonLabel position="floating">CPF</IonLabel>
                    <IonInput color="medium" value={cpf} clearInput={true} onChange={(e) => setCpf(e.target.value)}></IonInput>
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
                    <IonItem>
                    <IonLabel>
                      <div>

                      </div>
                    </IonLabel>
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