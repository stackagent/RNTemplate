import { createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import rootReducer from './reducers'
import { middlewares, sagaMiddleware } from './middlewares'
import { rootSaga } from './sagas';

import { AsyncStorage } from 'react-native';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['auth'] //'trade','withdraw'
}

const persistedReducer = persistReducer(persistConfig, rootReducer())


export const store = createStore(
    persistedReducer,
    compose(middlewares),
);

sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store);
