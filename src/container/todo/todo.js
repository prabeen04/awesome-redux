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
export default connect(mapStateToProps, mapDispatchToProps)(Todo);