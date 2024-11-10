import logo from '../assets/booklogo.png'
import React from 'react';
import { useState } from 'react';

export default function Header({onClickBtn}) {
  const[myBook,setMyBook]=useState('');
  function changeBooks(event){
    setMyBook(event.target.value);
  }
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img src={logo} alt="Page logo" style={{ width: '150px', height: 'auto' }} />
      <h1>Whole World in Your Hand</h1>
      <input 
        type="text" 
        placeholder="Search book by title" 
        onChange={changeBooks}
        style={{ padding: '10px', width: '80%', maxWidth: '400px', marginTop: '10px' }}
      />
      <button onClick={()=>onClickBtn(myBook)}>search</button>
    </div>
  );
}
