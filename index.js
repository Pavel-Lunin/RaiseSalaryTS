/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import store from './src/redux/reduxStore';
import {Provider} from 'react-redux';

import {name as appName} from './app.json';

const state = store.getState();

const MainApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => MainApp);
