import createSagaMiddleware from 'redux-saga';

import { sagas as books } from './book'
import { sagas as genres } from './genre'
import { sagas as login } from './login'

export const sagaMiddleware = createSagaMiddleware()

export default function runSagas(sagaMiddleware) {
    sagaMiddleware.run(books)
    sagaMiddleware.run(genres)
    sagaMiddleware.run(login)
}