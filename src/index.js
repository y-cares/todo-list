import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
// registerServiceWorker  为了使 pc 页面实现 pwa 功能
import registerServiceWorker from './registerServiceWorker';
// react-redux 用法
import { Provider } from 'react-redux'
import store from './store'


{/* <Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。
正常情况下，你的根组件应该嵌套在 <Provider> 中才能使用 connect() 方法。 */}
// 凡是被 Provider 组件包裹的子组件都有能力获取 store 里面的值
const App = () => {
    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
