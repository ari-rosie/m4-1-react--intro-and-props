import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

const App = (props) => {
  console.log(props);
  return (
    <div className='wrapper'>
      <Header participants={props.conversation.participants} user={props.currentUser}/>
      <ChatStream user={props.currentUser} messages={props.conversation.messages}/>
      <Footer />
    </div>    
  );
};

export default App;
