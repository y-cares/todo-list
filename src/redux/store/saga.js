import {takeEvery, put} from 'redux-saga/effects'
import axios from 'axios'
import {GET_INIT_LIST} from './actionType'
import {initTodoListAction} from './actionCreator'

function* getReduxSagaList() {
    try {
        const res = yield axios.get('/api/todolist')
        const action = initTodoListAction(res.data)
        yield put(action)
    } catch (error) {
        console.log('list 数据请求异常')
    }
}

// generator 函数
function* saga() {
    yield takeEvery(GET_INIT_LIST, getReduxSagaList);
}

export default saga;

