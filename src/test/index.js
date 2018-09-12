import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));

// React 中实现 css 过渡动画
// import App from './cssTransform/app.js'
// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
