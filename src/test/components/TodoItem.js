import React, { Component } from 'react';
// PropTypes 强校验
import PropTypes from 'prop-types';


class TodoItem extends Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  render() {
    const { content, test } = this.props
    // JSX -> React.createElement -> 虚拟Dom(JS 对象) -> 真实的DOM
    return (
      <li onClick={this.handleClick}>{test} - {content}</li>
    )
    // 如果想将输入的html标签转移出相应的样式，写法为：
    // 第一个 {} 为转移字符，第二个 {} 为对象字符
    // <li dangerouslySetInnerHtml={{__html: item}}></li>
  }
  handleClick = () => {
    const { index, deleteItem } = this.props
    deleteItem(index)
  }
};

// PropTypes 对父组件传入的属性进行强校验
// isRequired 表示必须要传
// PropTypes.oneOfType([])  多个条件
TodoItem.propTypes = {
  test: PropTypes.string,
  content: PropTypes.string,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func.isRequired
}

// DefaultProps  对父组件传入的属性设置默认值
TodoItem.defaultProps = {
  test: 'hello'
}

export default TodoItem;

