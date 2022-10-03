import React, {Component, useState , useContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../screens/home/Home';
import Details from '../screens/details/Details';


class App extends Component{
   render(){
       
    return(
        <Router>
            <Routes>
                <Route path ="/"  element = {<Home />} />
                <Route path ="/Details/:id" element = {<Details />} />
            </Routes>
    </Router>
    )
   }
}
export default App;