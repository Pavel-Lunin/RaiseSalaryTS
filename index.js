/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import store from './src/redux/reduxStore';
import { Provider } from 'react-redux';

import { ToastProvider } from 'react-native-toast-notifications';

import { name as appName } from './app.json';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);

const MainApp = () => (
    <Provider store={store}>
        <ToastProvider>
            <App />
        </ToastProvider>
    </Provider>
);

AppRegistry.registerComponent(appName, () => MainApp);
