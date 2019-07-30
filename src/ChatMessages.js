import React from 'react';
import STORE from './STORE';

export default function ChatMessages(props) {
    let exportedHTML;
    let chatEvent = props;
    let thisParticipant = {id:1, name:'string', avatar:'url', inSession:true, onStage:true};
    console.log(STORE.participants);

    //Identifier loop not working
    for (let i=0; STORE.participants.length < i; i++){
        let currentParticipant = STORE.participants[i];
        if (currentParticipant.id === chatEvent.participantId){
            thisParticipant = currentParticipant;
            i = STORE.participants.length;
        }}
    if (chatEvent.type === 'join'){
        exportedHTML = <p className="notification">{thisParticipant.name} joined</p>;
    }
    else if (chatEvent.type === 'thumbs-up'){
        exportedHTML = <div><p className="notification">{thisParticipant.name} gave a thumbs up</p><span id='thumbsup' className="tui-icon icon-thumbsup"></span></div>;
    }
    else if (chatEvent.type === 'thumbs-down'){
        exportedHTML = <div>div><p className="notification">{thisParticipant.name} gave a thumbs down</p><span id='thumbsdown' className="tui-icon icon-thumbsdown"></span></div>;
    }
    else if (chatEvent.type === 'raise-hand'){
        exportedHTML = <div><p className="notification">{thisParticipant.name} raised their hand</p><span id='raisedHand' className="tui-icon icon-raisedHand"></span></div>;
    }
    else if (chatEvent.type === 'clap') {
        exportedHTML = <div><p className="notification">{thisParticipant.name} clapped</p><span id='clap' className="tui-icon icon-clap"></span></div>;
    }
    else if (chatEvent.type === 'message') {
        let dateVar = new Date(chatEvent.time);
        let timeStr = dateVar.toLocaleDateString("default", {hour12: true});
        let hhmm = timeStr.slice(0,-6);
        let ampm = timeStr.slice(-2);
        let thisTime = `${hhmm} ${ampm}`;
        exportedHTML = <div><img class="chatAvatar" alt="avatar" src={thisParticipant.avatar}></img><p class="chatPrefix">{thisParticipant.name} {thisTime}</p><p class="chatMessage">{chatEvent.message}</p></div>;
    }

    else if (chatEvent.type === 'leave') {
        exportedHTML = <p className="notification">{thisParticipant.name} left</p>;
    }
    else if (chatEvent.type === 'join-stage')
    {
        exportedHTML = <p className="notification">{thisParticipant.name} joined the stage</p>;
    }
    else if (chatEvent.type === 'leave-stage'){
        exportedHTML = <p className="notification">{thisParticipant.name} left the stage</p>;
    }
    else {
        exportedHTML = <div class="hidden"></div>
    }

    return (
        <div>
            {exportedHTML}
        </div>
    )
}