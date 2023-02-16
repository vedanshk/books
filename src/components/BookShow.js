import React, { useState } from 'react'
import BookEdit from './BookEdit';
function BookShow({ book , onDelete , onEdit }) {

    const [showEdit , setShowEdit]  = useState(false);

    const handleClick = () =>{

        onDelete(book.id);
    }
  const handleSubmit = ( id , newTitle ) =>{
        onEdit(id , newTitle)

        setShowEdit(false);
    }
    const handleEdit = ()=>{
        setShowEdit(!showEdit);

    }

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit book={book} onSubmit={handleSubmit} />
    }

  
  return (
    <div className='book-show' >

        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt=" " />

        {content}

        <div className='actions'>
            <button className='edit' onClick={handleEdit}></button>
            <button className='delete' onClick={handleClick}></button>
        </div>
    </div>
  )
}

export default BookShow