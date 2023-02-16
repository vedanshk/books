import React, { useState , useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {

  
  const [books, setBooks] = useState([]);




  const fetchBooks = async () =>{

    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);

  };

  useEffect(()=>{

    fetchBooks();

  },[]);



  const createBook = async (title) => {
    console.log(title);

    const response = await axios.post('http://localhost:3001/books' , {
      title
    });


    const book = response.data

    setBooks([...books, book]);
  };

  const deleteBookByid = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
  };

  const updateBookById = (id , title) =>{

    const updatedBooks =  books.map( book =>{
        if(book.id === id){
            return {...book ,title }
        }

        return book;

    })

    setBooks(updatedBooks);
  }

  return (
    <div className="app">

        <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />

      <BookList books={books} onDelete={deleteBookByid} onEdit={updateBookById} />

      {books.length}
    </div>
  );
}

export default App;
