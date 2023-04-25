import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IonApp, IonButton, setupIonicReact } from '@ionic/react';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Signin from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Received from './pages/received';
import Register from './pages/Register';
import Simulator from './pages/Simulator';
import Registerproduct from './pages/Registerproduct';
import Registerpeople from './pages/Registerpeople';
import Mybenefits from './pages/Mybenefits';
import Menu from './pages/menu';
import Credit from './pages/Credit';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgotpass' element={<ForgotPassword/>}/>
        <Route path='/received' element={<Received/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/simulator' element={<Simulator/>}/>
        <Route path='/registerproduct' element={<Registerproduct/>}/>
        <Route path='/registerpeople' element={<Registerpeople/>}/>
        <Route path='/mybenefits' element={<Mybenefits/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/credit' element={<Credit/>}/>
      </Routes>
    </BrowserRouter>
  </IonApp>
);

export default App;
