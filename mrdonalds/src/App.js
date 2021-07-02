import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

const firebaseConfig = {
  apiKey: "AIzaSyDEyJK5RllWK8qzCoaTsfIiSwJAV4DOVzQ",
  authDomain: "mrdonalds-3dd0e.firebaseapp.com",
  databaseURL: "https://mrdonalds-3dd0e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-3dd0e",
  storageBucket: "mrdonalds-3dd0e.appspot.com",
  messagingSenderId: "461599323570",
  appId: "1:461599323570:web:c8eb9f1f3a108c91a7a0ab",
  measurementId: "G-Y5329EX9F7"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();

  useTitle(openItem.openItem);

    return (
      <Context.Provider value={{
        auth,
        openItem,
      }}>
        <GlobalStyle/>
        <NavBar/>
        <Order
          {...orders} 
          {...openItem} 
          {...auth}
          {...orderConfirm}
        />
        <Menu/>
        { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
        {orderConfirm.openOrderConfirm && 
          <OrderConfirm {...orders} {...auth} {...orderConfirm} firebaseDatabase={firebase.database}/>}
      </Context.Provider>
  );
}

export default App;
