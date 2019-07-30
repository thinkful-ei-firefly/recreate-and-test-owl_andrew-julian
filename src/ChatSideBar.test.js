import React from 'react';
import ReactDOM from 'react-dom';
import ChatSideBar from './ChatSideBar';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <ChatSideBar 
    chatEvents={[{
        participantId: 3,
        type: 'message',
        message: 'Hello world',
        time: 1548852646559,
        timestamp: 1548852484247
    },
    {
        participantId: 2,
        type: 'thumbs-up',
        timestamp: 1548852484247
    }]}
        />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<ChatSideBar 
        chatEvents={[{
            participantId: 3,
            type: 'message',
            message: 'Hello world',
            time: 1548852646559,
            timestamp: 1548852484247
        },
        {
            participantId: 2,
            type: 'thumbs-up',
            timestamp: 1548852484247
        }]}
            />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });

