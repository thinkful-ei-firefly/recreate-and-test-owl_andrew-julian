import React from 'react';

export default function Participant(props) {
    let classes1;
    let classes2;
    let status;
    if (props.inSession === true) {
        classes1 = 'participant inSession'
    }
    else {
        classes1 = 'participant notInSession'
    }

    if (props.onStage === true) {
        classes2 = 'onStageStatus onStage';
        status = 'on stage';
    }
    else {
        classes2 = 'onStageStatus notOnStage';
        status = 'in session'
    }


    return (
        <div className={classes1} id={props.id}>
            <img src={props.avatar} alt="avatar"></img>
            <h4>{props.name}</h4>
            <div className={classes2}>
                <h6>&bull;</h6>
                <h5>{status}</h5>
            </div>
        </div>
    )
}