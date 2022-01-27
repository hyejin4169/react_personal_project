import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
// 리액트 라우터 돔에서 가져와서 라우터 붙임

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  //App을 감싼 브라우저 라우터
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
