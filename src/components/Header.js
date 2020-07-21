import React from 'react';

import './Header.css';

const Avatar = ({img, name}) => {
  return <div className='participant'>
    <img src={img} alt={name}/>
    <p>{name}</p>
  </div>
};

const Header = ({participants, user}) => {
  return <header>{participants.filter(each => 
      each.username !== user.username
    ).map(each => 
      <Avatar key={participants.indexOf(each)} img={each.avatar} name={each.username}/>
    )}
    </header>;
};

export default Header;
