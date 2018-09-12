import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            list: []
        }
    }
    handleToggle = () => {
        this.setState((preState) => ({
            show: preState.show ? false : true
        }))
    }
    handleAddItem = () => {
        this.setState((preState) => ({
            list: [...preState.list, 'item']
        }))
    }
    render() {
        const {show, list} = this.state
        return (
            <Fragment>
                <CSSTransition
                    in={show} // in 判断条件 
                    timeout={1000}  // timeout  动画过度事件
                    classNames = "fade"  // 入场动画的前缀
                    unmountOnExit  // 执行完出场动画后，是否移除 Dom
                    onEntered = {el => {  // el 为包裹住的元素
                        el.style.color = "blue"
                    }} // 入场动画执行完后的钩子
                    appear = {true}  // 第一次执行时，是否添加动画
                    >  
                    <div className="hello">hello world</div>
                </CSSTransition>
                {/* <div className={`hello ${show ? 'show' : 'hide'}`}>hello world</div> */}
                <button onClick={this.handleToggle}>toggole</button>
                <br/>
                <TransitionGroup>
                    {
                        list.map((item, index) => {
                            return (
                                <CSSTransition
                                key={index}
                                    timeout={1000}
                                    classNames = "fade"
                                    unmountOnExit
                                    onEntered = {el => {
                                        el.style.color = "red"
                                    }}
                                    appear = {true}
                                    >  
                                    <div>{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleAddItem}>Add</button>
            </Fragment>
        )
    }
}

export default App

