import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'

import App from './App'
import './index.less'
import './normalize.css'
import zhCN from 'antd/es/locale/zh_CN'
import store from './store'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <App></App>
      </ConfigProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


