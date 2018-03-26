import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Todo extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      <div>
        <h1>To do component</h1>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        totos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getTodos: getTodos,
        deleteTodo: deleteTodo
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);