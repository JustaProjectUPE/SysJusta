import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonList, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonCardHeader, IonCardTitle, IonButtons, IonBackButton, IonSelectOption, IonSelect} from '@ionic/react';
import './Signup.css';
import ReactInputMask from 'react-input-mask';

const Signup: React.FC = () => {

  async function handleSubmit() {
    const dataToAdd = { name: name};
    const response = await fetch("/add-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToAdd)
    });
    const result = await response.json();
    console.log(result);
  }

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
      <IonContent className="signup-content">
        <IonGrid className="signup-section">
          <h1>Crie sua conta</h1>
          <p>Insira corretamente as informações abaixo.</p>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardContent>
                  <IonItem>
                    <IonInput label="Nome" value={name} onIonChange={(e) => setName(e.detail.value)} color="medium" clearInput={true} type="text"></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput label="Sobrenome" color="medium" clearInput={true} type="text"></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Data de Nascimento</IonLabel>
                    <ReactInputMask className="input-Date" mask="99/99/9999" />
                  </IonItem>
                  <IonItem>
                    <IonSelect placeholder="Selecione uma opção">
                      <IonSelectOption value="1">CPF</IonSelectOption>
                      <IonSelectOption value="2">CNPJ</IonSelectOption>
                    </IonSelect>
                    <IonInput  color="medium" clearInput={true} ></IonInput>
                  </IonItem>
                  <IonItem>
                  <IonLabel position="floating">Telefone</IonLabel>
                  <ReactInputMask className="input-Telefone" mask="+99 (99) 99999-9999" />
                  </IonItem>
                  <IonItem>
                    <IonInput label="E-mail" color="medium" clearInput={true} type="email"></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput label="Login" color="medium" clearInput={true}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput label="Senha" color="medium" clearInput={true} type="password"></IonInput>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonButton size="default" className="signup-button" onClick={handleSubmit}>Criar</IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Signup;

