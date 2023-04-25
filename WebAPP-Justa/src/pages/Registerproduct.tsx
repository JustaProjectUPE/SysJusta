import { IonContent, IonHeader, IonPage, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonMenu, IonFab, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonButtons, IonBackButton} from '@ionic/react';
import './Registerproduct.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface prodType {
  code: number,
  product: string,
  value: number,
  stock: number,
}

const Registerproduct: React.FC = () => {

  const [prodData, setProdData] = useState<prodType[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  useEffect(() => {
    fetchData(location.state.id);
  }, [location.state.id]);

  async function fetchData(client_tolken: number) {
    try{
      let res:any = await axios.get(`http://localhost:3000/products/${client_tolken}`);
      const flatEmpData = res.data.flat();
      flatEmpData.shift()
      const newList = flatEmpData.map((products:prodType) => ({
        code: products.code,
        product: products.product,
        value: products.value,
        stock: products.stock
      }));

      setProdData(newList);

    } catch (error) {
      console.log(error)
    }
  }

  function handleGoBack() {
    navigate('/register', {state:{id:location.state.id, loyalty:location.state.loyalty}});
  }

  return (
    <IonPage onLoad={()=>{fetchData(location.state.id)}}>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start" onClick={()=>handleGoBack()}>
            <IonBackButton defaultHref="/register"></IonBackButton>
          </IonButtons>
          <div className="titleicon">
            <img src = "/logo2.png"></img>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="register-product-content">
        <IonGrid className="register-product-section">
          <h1>Cadastro Geral de Produtos</h1>
          <p>Insira as informações abaixo.</p>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Formulário</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
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
                  <IonCardTitle>Produtos cadastrados</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                  {prodData.map((prod, index) => (
                      <IonItem key={index}>
                        <IonLabel>#{prod.code} {prod.product}</IonLabel>
                        <IonLabel>R${prod.value} Estoque: {prod.stock}</IonLabel>
                      </IonItem>
                    ))}
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

export default Registerproduct;