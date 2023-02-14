import AsyncStorage from '@react-native-async-storage/async-storage';
import { legacy_createStore as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { rootReducer } from '../reducers';

const persistConfig = {
  key: 'RNTest',
  storage: AsyncStorage,
  blacklist: ['nav', 'navigation'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
