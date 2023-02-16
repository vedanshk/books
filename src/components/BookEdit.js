import React, { useState } from 'react'

function BookEdit({book ,  toggleForm , onEdit}) {

    const [title  , setTitle ] =  useState(book.title);

    console.log(book)
    const handleChange = (e) =>{

        setTitle(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        onEdit(book.id , title);

        toggleForm(false);
    
    }
  return (
    <div>
        <form className="edit" onSubmit={handleSubmit}>

             <label>Title</label>

            <input type="text" value={title} onChange={handleChange}  />
            <button className='button is-primary' >Save</button>

        </form>
    </div>
  )
}

export default BookEdit