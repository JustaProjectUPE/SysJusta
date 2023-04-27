import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonList, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonCardHeader, IonCardTitle, IonButtons, IonBackButton, IonSelectOption, IonSelect} from '@ionic/react';
import './Signup.css';
import ReactInputMask from 'react-input-mask';
import axios from 'axios';
import { useState } from 'react';

const Signup: React.FC = () => {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [document, setDocument] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  async function postData(){
    try {
     await axios.post("http://localhost:3000/register", {
      name: name,
      surname: surname,
      document: document,
      birth:birthdate,
      cnpj:document,
      phone:phone,
      email: email,
      login: login,
      password: password
     });
     console.log(name, surname)
    } catch (error) {
      console.log(error);
    }
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
                    <IonInput label="Nome" color="medium" clearInput={true} type="text" onIonInput={(e:any)=>{setName(e.target.value)}}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput label="Sobrenome" color="medium" clearInput={true} type="text" onIonInput={(e:any)=>{setSurname(e.target.value)}}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Data de Nascimento</IonLabel>
                    <ReactInputMask value={birthdate} className="input-Date" mask="99/99/9999"/>
                  </IonItem>
                  <IonItem>
                    <IonSelect placeholder="Selecione uma opção">
                      <IonSelectOption value="1">CPF</IonSelectOption>
                      <IonSelectOption value="2">CNPJ</IonSelectOption>
                    </IonSelect>
                    <IonInput  color="medium" value={document} clearInput={true} onIonInput={(e:any)=>{setDocument(e.target.value)}}></IonInput>
                  </IonItem>
                  <IonItem>
                  <IonLabel position="floating">Telefone</IonLabel>
                  <ReactInputMask value={phone} className="input-Telefone" mask="+99 (99) 99999-9999" />
                  </IonItem>
                  <IonItem>
                    <IonInput label="E-mail" value={email} onIonInput={(e:any)=>{setEmail(e.target.value)}} color="medium" clearInput={true} type="email"></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput label="Login" value={login} onIonInput={(e:any)=>{setLogin(e.target.value)}} color="medium" clearInput={true}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput label="Senha" value={password} onIonInput={(e:any)=>{setPassword(e.target.value)}} color="medium" clearInput={true} type="password"></IonInput>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          </form>
          <IonButton size="default" className="signup-button" onClick={()=>postData()}>Criar</IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Signup;

