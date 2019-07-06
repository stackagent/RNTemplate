import { applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import createSagaMiddleware from 'redux-saga';

const loggerMiddleware = createLogger();

export const sagaMiddleware = createSagaMiddleware();

export const middlewares = applyMiddleware(
    sagaMiddleware,
    promiseMiddleware,
    loadingBarMiddleware(),
    loggerMiddleware,
);
