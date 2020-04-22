import React, { useState } from 'react';
// 调试组件（开发模式）引入
import { Welcome, Hello } from '@arkrm/umi-father-seed/dist';
// // 调试组件（生产模式）引入
// import { Welcome, Hello } from '@arkrm/umi-father-seed';
import './App.css';

const setDarkTheme = () => {
  document.documentElement.style.setProperty('--ufs-primary-color', '#00bc70');
  document.documentElement.style.setProperty('--ufs-normal-text-color', '#ffffff');
  document.documentElement.style.setProperty('--ufs-normal-bg-color', '#001529');
};

const setLightTheme = () => {
  document.documentElement.style.removeProperty('--ufs-primary-color');
  document.documentElement.style.removeProperty('--ufs-normal-text-color');
  document.documentElement.style.removeProperty('--ufs-normal-bg-color');
};

function App() {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    if (theme === 'light') {
      setDarkTheme();
      setTheme('dark');
      return;
    }
    setLightTheme();
    setTheme('light');
  }
  return (
    <div className="App">
      <div className="main">
      <div className="item">
          <div className="title">Hello组件</div>
          <Hello />
        </div>
        <div className="item">
          <div className="title">Welcome组件</div>
          <Welcome btnText="更换主题" onBtnClick={changeTheme} ds={['多/少', '好/坏', '长/短', '上/下', '冷/热']} />
        </div>
      </div>
    </div>
  );
}

export default App;
