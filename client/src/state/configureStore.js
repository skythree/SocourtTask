import { createStore, applyMiddleware } from 'redux'
import runSagas, { sagaMiddleware } from './sagas'
import rootReducers from './reducers'

const middlewares = [sagaMiddleware];

//adding logger here probably is a good idea


export default () => {
    const store = createStore(rootReducers, undefined, applyMiddleware(...middlewares))

    runSagas(sagaMiddleware)

    return store
}