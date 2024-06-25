import React from 'react';
import './ChatBox.css';

const ChatBox = ({ user }) => {
    return (
        <div className='chat-box'>
            <div className='chat-profile'>
                <img src={user.image} alt={user.name} />
            </div>
            <div className='chat-details'>
                <div className='chat-title'>
                    <h4>{user.name}</h4>
                    <p>{user.textTime}</p>
                </div>
                <div className="chat-text">
                    <p>{user.text}</p>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;