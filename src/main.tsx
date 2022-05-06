import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'virtual:svg-icons-register';

// 测试虚拟模块
import fib from 'virtual:fib';
import env from 'virtual:env';

alert(`结果: ${fib(10)}` + JSON.stringify(env));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
