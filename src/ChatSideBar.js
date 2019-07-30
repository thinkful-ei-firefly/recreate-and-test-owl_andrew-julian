import React from 'react';
import ChatMessages from './ChatMessages';
import cuid from 'cuid';

function ChatSideBar(props) {
    return (
      <div className="ChatSideBar">
          {props.chatEvents.map((chat) =>
              <ChatMessages
                    key={cuid()}
                    participantId={chat.participantId}
                    type={chat.type}
                    message={chat.message}
                    time={chat.time}
                    timestamp={chat.timestamp}

                  />
              )}
      </div>
    );
  }

export default ChatSideBar;