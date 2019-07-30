import React, {Component} from 'react';
import './App.css';
import ParticipantSideBar from './ParticipantSideBar';

class App extends Component {
  static defaultProps = {
    store: {
      participants: []
    }
  };

  render() {
    const { store } = this.props
    return (
      <ParticipantSideBar
        participants={store.participants}
        />
    );
  }
}

export default App;
