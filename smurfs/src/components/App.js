import React, { Component } from "react";
import "./App.css";

import SmurfList from './smurfsList';
import SmurfForm from './smurfsForm';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div className="App">
           <Header />

   <div className = 'grid-2'>
      <SmurfList />
       <SmurfForm />
      </div>

   </div>
    );
  }
}

export default App;
