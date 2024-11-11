import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import axios from 'axios'
import BookList from './components/BookList'
//import BookHardCover from './components/BookHardCover'
function App() {
const[book,setBook]=useState(null);
const[loading,isLoading]=useState(false);
const check=(loading && !book)? true : false;
console.log(check);
async function findBook(title){
  isLoading(check=>!check);
  
  try {
    const response = await axios.get(`https://openlibrary.org/search.json?title=${title}`);
    
    setBook(response.data.docs);
  } catch (error) {
    console.error("Error fetching data from Open Library API", error);
  }
}
  return (
    <div id='app'>
    <Header onClickBtn={findBook} />
     <main>
      {check && <h1>Loading....</h1>}
      {book && <BookList books={book}></BookList>
}
     </main>
    </div>
  )
}

export default App
