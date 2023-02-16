import { createContext, useState } from "react";
import axios from "axios";
const BooksContext = createContext();

const Provider = ({ children }) => {
 
    const [books , setBooks] =  useState([]);
    
  const fetchBooks = async () =>{

    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);

  };


  const createBook = async (title) => {
    console.log(title);

    const response = await axios.post('http://localhost:3001/books' , {
      title
    });


    const book = response.data

    setBooks([...books, book]);
  };

  const deleteBookByid = async (id) => {

   await axios.delete(`http://localhost:3001/books/${id}`)
    
    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
  };

  const updateBookById = async (id , title) =>{

    const response = await axios.put('http://localhost:3001/books/'+id,{
      title
    });


    setBooks([...books , ...response.data]);
  }


  const valueToShare = {
    books,
    onCreate: createBook,
    fetchBooks,
    onDelete:deleteBookByid,
    onEdit:updateBookById
  }





  return (
    <BooksContext.Provider value={valueToShare} >
      {children}
    </BooksContext.Provider>
  );
};

export {Provider};
export default BooksContext;
