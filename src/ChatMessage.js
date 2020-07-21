import React from 'react';

import './ChatMessage.css';


const ChatMessage = ({user, message, currentUser, img, messageType}) => {
    return <div className={(user === currentUser) ? 'user' : 'not_user'}>
        <img src={img} alt={user}/>
        <div className='mess_wrapper'>
            <span>{user}</span>
            <div className='message'>{message}</div>
        </div>
    </div>;
};
        

export default ChatMessage;