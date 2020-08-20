import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {updateNewPostText} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

 const App = () => {

  return (
          <div className = 'app-wrapper'>
              <Header/>
              <Navbar/>
              <div className ='app-wrapper-content'>

                  <Route path = '/dialogs'
                         render = { () => <DialogsContainer /> }/>
                  <Route path = '/profile'
                         render = { () => <Profile /> }/>

                  <Route path = '/news' component = {Profile}/>
                  <Route path = '/music' component = {Profile}/>
                  <Route path = '/setting' component = {Profile}/>
              </div>
          </div>

  )
}

export default App;
