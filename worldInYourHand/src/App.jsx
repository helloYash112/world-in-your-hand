import { useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {
const[book,setBook]=useState([]);
function findBook(book){
setBook(book);
}
  return (
    <>
    <Header onClickBtn={findBook} />
     <h1>{book}</h1>
    </>
  )
}

export default App
