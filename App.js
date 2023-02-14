/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppNavigation } from './src/navigation';
import { persistor, store } from './src/store';
import { Colors } from './src/theme';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <SafeAreaView style={{ backgroundColor: Colors.white }} />
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
