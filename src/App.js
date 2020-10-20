import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Tests from './components/Tests/Tests';
import TestsConteiner from './components/Tests/TestsConteiner';

const App = () => {
  return (
    <BrowserRouter>
      <div className = {"app"}>
          <Header />
          <NavBar />
          <div className = {"app_content"}>
              <Route path = {"/tests"} render = {() => <TestsConteiner />}/>
              <Route path = {"/results"} />
          </div>
      </div>
    </BrowserRouter>
  )

}  

export default App;
