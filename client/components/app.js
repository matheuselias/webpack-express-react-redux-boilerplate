import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from '../actions/index';

class App extends Component {
  componentDidMount(){
    this.props.fetchMessage();
  }
  render() {
    return (
      <div>{this.props.message}</div>
    );
  }
}

function mapStateToProps(state){
  return { message: state.fetchMessage.message }
}

export default connect(mapStateToProps, { fetchMessage })(App);
