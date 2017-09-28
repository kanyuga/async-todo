import React from 'react';
import store from '../store';
import { Provider } from 'react-redux';

import AppContainer from "./AppContainer";

const AppRoot = (props) => (
  <Provider store={store}><AppContainer /></Provider>
);

export default AppRoot;
