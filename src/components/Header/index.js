import React from 'react';
import './index.css';

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className='header--logo'>
        <a href='/'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutHtCjDpYfGp8ZIMRq7iI_CH5d__aT7ESxdKLE8ksq9k8f0_oHoAkzfas5Zh5Du28h1c&usqp=CAU'
            alt='Netflix'
          />
        </a>
      </div>
      <div className='header--user'>
        <a href='/'>
          <img
            src='https://i.pinimg.com/736x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg'
            alt='usuário'
          />
        </a>
      </div>
    </header>
  );
};
