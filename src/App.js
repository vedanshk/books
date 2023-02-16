import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log(title);

    const book = { id: Math.floor(Math.random() * 9999), title: title };

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
