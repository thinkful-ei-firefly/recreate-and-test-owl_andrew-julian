import React, {Component} from 'react';
import './App.css';
import ParticipantSideBar from './ParticipantSideBar';
import Stage from './Stage';

class App extends Component {
  static defaultProps = {
    store: {
      participants: []
    }
  };

  render() {
    const { store } = this.props
    return (
      // <ParticipantSideBar
      //   participants={store.participants}
      //   />
      <Stage participants={store.participants}/>

    );
  }
}

export default App;
