import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar'
import Messages from './components/Messages'
import data from './data/messages'
import Message from './components/Message'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      messages: data
    }
  }

  render() {
    return (
      <div>
        <Toolbar messages={this.state.messages} update={msgs => {
          console.log('recieved mess', msgs);
          this.setState({...this.state, messsages: msgs})
        }}/>
        <Message />
        <Messages messages={this.state.messages} update={msgs => {
          this.setState({...this.state, messsages: msgs})
        }}/>
      </div>
    );
  }
}

export default App;
