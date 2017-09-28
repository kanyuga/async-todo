import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppRoot from "./components/AppRoot";

ReactDOM.render(<AppRoot />, document.getElementById('root'));
registerServiceWorker();
