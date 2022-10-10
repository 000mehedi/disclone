import React, { useEffect } from 'react';
import Sidebar from "./Sidebar";
import Chat from "./Chat"
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/counter/userSlice';
import Login from './Login';
import { auth } from './firebase';
import {login, logout} from './features/counter/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{

      if (authUser){
         dispatch(
           login({
           uid: authUser.uid,
           photo: authUser.photoURL,
           email: authUser.email,
           displayName: authUser.displayName,
         }));
      }else{
        dispatch(logout());
      }
    });
  },[dispatch])

  return (
    <div className="app">
      {user ?(
        <>
        <Sidebar/>
        <Chat/>
        </>
      ):(
        <Login/>
      )}






    </div>
  );
}

export default App;
