import React, { Component, Fragment } from 'react'
// Fragment 占位符，可替换多余的 div 标签
import TododItem from '../components/TodoItem'
import { Input } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['学英语']
    }
  }
  render() {
    const { inputValue, list } = this.state
    return (
      <Fragment>
        {/* 注释 */}
        <div>
            <label htmlFor="innsertArea">输入内容</label>
            <input id="innsertArea"
              className="input"
              value={inputValue}
              // react16 中，ref 指向的是一个函数
              // 意思：构建了一个 input 的引用，这个引用指向 input 对应的 Dom 节点
              // 注：尽量不要直接操作 Dom 元素
              ref={(input) => {this.input = input}}
              onChange={this.handleInputChage} />
            <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return ( <TododItem
                  key={index}
                  content={item}
                  index={index}
                  deleteItem={this.handleItemDelete}/> )
              // return <li key={index} 
              // onClick={this.handleItemClick(index)}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    );
  }
  handleInputChage = (e) => {
    const value = e.target.value
    // 此时的 this.input 指向的是 input 的 Dom 元素
    // const value = this.input.value
    this.setState(() => ({
        inputValue: value
    }))
  }
  handleBtnClick = () => {
    // setState 是异步函数
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      // 当setState修改回调函数执行完后，执行该 回调函数
    })
  }
  handleItemDelete = (index) => {
    this.setState((prevState) => {
      const {list} = prevState
      list.splice(index, 1)
      return {list}
    })
  }
  componentDidMount = () => {
    this.todoListData()
  }
  // 请求数据的方式
  todoListData() {
    axios.get('/api/todolist').then(res => {
      this.setState((prevState) => ({
        list: [...prevState.list, ...res.data]
      }))
    }).catch(err => {

    })
  }

}

export default TodoList
