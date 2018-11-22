import React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

ReactDOM.render(
  <div className="app">
    <p>It works!</p>
  </div>,
  document.getElementById('root') as HTMLElement,
);

declare const module: any;
if (module.hot) module.hot.accept();
