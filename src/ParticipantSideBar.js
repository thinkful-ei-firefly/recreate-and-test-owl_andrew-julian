import React from 'react';
import Participant from './Participant';

//Prop = array of objects; Each object has keys of id, name, avatar, inSession, and onStage;


function ParticipantSideBar(props) {
  return (
    <div className="ParticipantSideBar">
        {props.participants.map((participant) =>
            <Participant
                key={participant.id}
                id={participant.id}
                name={participant.name}
                avatar={participant.avatar}
                inSession={participant.inSession}
                onStage={participant.onStage}
                />
            )}
    </div>
  );
}

export default ParticipantSideBar;
