import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantSideBar from './ParticipantSideBar';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <ParticipantSideBar 
    participants={[{
        id: 1,
        name: 'Koren Templeton',
        avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    },
    {
        id: 2,
        name: 'Caty Flucker',
        avatar:
            'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
    }]}
        />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<ParticipantSideBar 
        participants={[{
            id: 1,
            name: 'Koren Templeton',
            avatar:
                'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: true
        },
        {
            id: 2,
            name: 'Caty Flucker',
            avatar:
                'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: false
        }]}
            />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });

