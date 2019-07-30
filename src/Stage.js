import React from 'react';
import Participant from './Participant';
import './stage.css';



function Stage(props) {
  
  const isOnStage = props.participants.filter(Participant => Participant.onStage);

  return (
    <div className="Stage">
        {isOnStage.map((stageArr) =>
        
            <Participant
                key={stageArr.id}
                id={stageArr.id}
                name={stageArr.name}
                avatar={stageArr.avatar}
                inSession={stageArr.inSession}
                onStage={stageArr.onStage}
                />
            )}
    </div>
  );
}

export default Stage;