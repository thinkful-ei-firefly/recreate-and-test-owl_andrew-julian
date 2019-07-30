import React from 'react';
import ReactDOM from 'react-dom';
import ChatMessages from './ChatMessages';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatMessages />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ChatMessages />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
  