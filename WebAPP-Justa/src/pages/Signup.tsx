import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonList, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonCardHeader, IonCardTitle, IonButtons, IonBackButton, IonSelectOption, IonSelect} from '@ionic/react';
import './Signup.css';
import ReactInputMask from 'react-input-mask';
import axios from 'axios';
import { useState } from 'react';

const Signup: React.FC = () => {
  const [register, setRegister] = useState({
    name: '',
    surname: '',
    birthdate: '',
    document: '',
    phone: '',
    email: '',
    login: '',
    password: ''
  })

  async function postData(){
    try {
     await axios.post("localhost:3000/register", register);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange () {
    setRegister({...register})
  }

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton defaultHref="/home"></IonBackButton>
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
          <form>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardContent>
                  <IonItem>
                    <IonInput label="Nome" value={register.name} color="medium" clearInput={true} type="text" onIonChange={handleChange}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput label="Sobrenome" value={register.surname} color="medium" clearInput={true} type="text" onIonChange={handleChange}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Data de Nascimento</IonLabel>
                    <ReactInputMask value={register.birthdate} className="input-Date" mask="99/99/9999"/>
                  </IonItem>
                  <IonItem>
                    <IonSelect placeholder="Selecione uma opção">
                      <IonSelectOption value="1">CPF</IonSelectOption>
                      <IonSelectOption value="2">CNPJ</IonSelectOption>
                    </IonSelect>
                    <IonInput  color="medium" value={register.document} clearInput={true} onIonChange={handleChange}></IonInput>
                  </IonItem>
                  <IonItem>
                  <IonLabel position="floating">Telefone</IonLabel>
                  <ReactInputMask value={register.phone} className="input-Telefone" mask="+99 (99) 99999-9999" />
                  </IonItem>
                  <IonItem>
                    <IonInput label="E-mail" value={register.email} onIonChange={handleChange} color="medium" clearInput={true} type="email"></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput label="Login" value={register.login} onIonChange={handleChange} color="medium" clearInput={true}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput label="Senha" value={register.password} onIonChange={handleChange} color="medium" clearInput={true} type="password"></IonInput>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          </form>
          <IonButton size="default" className="signup-button" onClick={postData}>Criar</IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Signup;

