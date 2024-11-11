import logo from '../assets/booklogo.png';
import React, { useState } from 'react';
import styled from 'styled-components';


const DIV=styled.div`
align-items: center;
 justify-content: center; 
 width: 100%;
   margin: 0 auto;
   background:#e3f2fd;
   border-radius: 8px; 
   
   padding: 10px; 
`
const INPUT = styled.input`
  
  width:400px;
  padding:10px;
  max-width: 400px;
  margin-top: 10px;
  background-color: #e8f0fe;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 16px;
`;

const HEADING = styled.h1`
background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
-webkit-background-clip: text;
color: transparent;
font-size: 4em;
font-weight: bold;
`;

const IMG = styled.img`
width: 150px;
height: 150px;
`;
const BUTTON=styled.button`
padding:10px 20px;
width:400px;
background-color: #3498db; 
color: white;
border: none;
border-radius: 5px; 
cursor: pointer;
font-size: 16px;
transition: background-color 0.3s ease, transform 0.2s ease;
`

export default function Header({ onClickBtn }) {
  const [myBook, setMyBook] = useState('');

  function udtBookData(event) {
    setMyBook(event.target.value);
  }

  return (
    <DIV>
      <IMG src={logo} alt="Page logo" />
      <HEADING>Whole World in Your Hand</HEADING>
      <INPUT
        type="text"
        placeholder="search book by title"
        onChange={udtBookData}
      />
      <BUTTON onClick={() => onClickBtn(myBook)}>search</BUTTON>
    </DIV>
  );
}

