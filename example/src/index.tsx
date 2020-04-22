import React from 'react';
import ReactDOM from 'react-dom';
// 调试组件（开发模式）引入
import '@arkrm/umi-father-seed/dist/entry.css';
// // 调试组件（生产模式）全量引入组件时引入
// import '@arkrm/umi-father-seed/dist/index.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
