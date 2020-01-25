import React from "react";
import {Switch, Route} from 'react-router-dom'
import { Navbar, Footer, Card } from "./components/common/";
import Homepage from './components/pages/Homepage' 

import './_GlobalStyle.scss';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path ="/" component={Homepage}/>        
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;