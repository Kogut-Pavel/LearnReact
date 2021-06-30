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

    return (
      <>
        <GlobalStyle/>
        <NavBar {...auth}/>
        <Order
          {...orders} 
          {...openItem} 
          {...auth}
          firebaseDatabase={firebase.database}
        />
        <Menu {...openItem}/>
        { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
      </>
  );
}

export default App;
