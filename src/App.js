import React, {Component} from 'react';
import './App.css';
import ParticipantSideBar from './ParticipantSideBar';
import ChatSideBar from './ChatSideBar';

class App extends Component {
  static defaultProps = {
    store: {
      participants: [],
      chatEvents: []
    }
  };

  render() {
    const { store } = this.props
    return (
      <ChatSideBar
        chatEvents={store.chatEvents}
        />
    );
  }
}

export default App;
