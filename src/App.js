
import { Toolbar } from '@material-ui/core';
import React, { Component } from 'react';

import './App.css'
import Headerbar from './Components/header1';

import { Body } from './Components/body';
import Header from './Components/Header';


class App extends Component {
  render() {
    return (
      
       <div>
         <Headerbar/>
         <Toolbar/>
         <Toolbar/>
         <Toolbar/>
           <Header/>  
           <div className="main">
           <Body/>

           </div>
       </div> 
      

       
    );
    
  }
}
export default App;
