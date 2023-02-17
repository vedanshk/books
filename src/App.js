import React, { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";

function App() {

  const {stableFetchBooks } = useBooksContext();

  useEffect(()=>{
  
    stableFetchBooks();

  } , [stableFetchBooks]);


  return (
    <div className="app">

        <h1>Reading List</h1>
      <BookCreate />

      <BookList />
    </div>
  );
}

export default App;
