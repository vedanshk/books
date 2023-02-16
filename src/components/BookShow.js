import React, { useState } from 'react'
import BookEdit from './BookEdit';
function BookShow({ book , onDelete , onEdit }) {

    const [showEdit , setShowEdit]  = useState(false);

    const handleClick = () =>{

        onDelete(book.id);
    }
  const handleToggleForm = ( value ) =>{

        setShowEdit(value);
    }
    const handleEdit = ()=>{
        setShowEdit(!showEdit);

    }

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit book={book} toggleForm={handleToggleForm}  onEdit={onEdit} />
    }

  
  return (
    <div className='book-show' >

        {content}

        <div className='actions'>
            <button className='edit' onClick={handleEdit}></button>
            <button className='delete' onClick={handleClick}></button>
        </div>
    </div>
  )
}

export default BookShow