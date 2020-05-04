import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import App from './App'
import './index.less'
import './normalize.css'
import zhCN from 'antd/es/locale/zh_CN'


ReactDOM.render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <App></App>
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


