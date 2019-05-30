import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMidlleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development'
  ? console.tron.createSagaMonitor()
  : null;

const sagaMiddleware = createSagaMidlleware({ sagaMonitor });
middlewares.push(sagaMiddleware);

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

const store = createStore(reducers, composer);
sagaMiddleware.run(sagas);

export default store;
