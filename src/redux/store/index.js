import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// redux-thunk redux 中间件
import thunk from 'redux-thunk'
// redux-saga 中间
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
// saga 请求文件
import saga from './saga'

// 创建store，并将 Reducer 与 store 相结合
// 用于页面调试使用
// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// redux-thunk 配置文件
// const enhancer = composeWithDevTools(
    //     applyMiddleware(thunk)
// )
// const store = createStore(reducer, enhancer)

// redux-saga 配置文件
const sagaMiddleware = createSagaMiddleware()
// const enhancer = composeWithDevTools(
//     applyMiddleware(sagaMiddleware)
// )
// 执行 saga 文件
// sagaMiddleware.run(saga)

// 项目使用的 中间件配置文件
const enhancer = composeWithDevTools(
    applyMiddleware(thunk, sagaMiddleware)
)

const store = createStore(reducer, enhancer)
sagaMiddleware.run(saga)

export default store
