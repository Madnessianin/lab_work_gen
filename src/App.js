import React from 'react';
import logo from './logo.svg';
import style from './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import {Route } from 'react-router-dom';
import Tests from './components/Questions/Questions';
import QuestionsConteiner from './components/Questions/QuestionsConteiner';

const App = () => {
  return (
    <div className = {style.inner}>
      <Header />
      <div className = {style.appWrapper}>
          <NavBar />
          <div className = {style.app_content}>
              <Route path = {"/tests"} render = {() => <QuestionsConteiner />}/>
              <Route path = {"/results"} />
          </div>
      </div>
    </div>
  )

}  

export default App;
