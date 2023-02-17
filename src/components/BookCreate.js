import React, { useContext, useState } from 'react'
import useBooksContext from '../hooks/use-books-context';
function BookCreate() {
  const { onCreate } = useBooksContext();
    const [title , setTitle] =  useState('');

    const handleSubmit = (e)=>{

        e.preventDefault();

        onCreate(title);

        setTitle('');

    }

    const handleChange = (e)=>{

        setTitle(e.target.value);
    }
  return (
    <div className='book-create'>
        <h3>Add Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className='input' type="text" onChange={handleChange} value={title} />   
            <button className='button' type='submit'>Create!</button>
        </form>

    </div>
  )
}

export default BookCreate